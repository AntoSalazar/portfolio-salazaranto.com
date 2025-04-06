
import { useMoodTheme, type MoodTheme } from "./MoodThemeProvider";
import { Coffee, Headphones, Moon, Palette, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";

export function MoodThemeToggle() {
  const { moodTheme, setMoodTheme } = useMoodTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleThemeChange = (value: string) => {
    if (!value || isAnimating) return;
    
    setIsAnimating(true);
    
    // Add transition class for smoother theme changes
    document.body.classList.add('mood-theme-transition');
    
    // Create and apply flash effect for theme change
    const flash = document.createElement('div');
    flash.className = 'mood-theme-flash';
    document.body.appendChild(flash);
    
    // Set new theme after a short delay
    setTimeout(() => {
      setMoodTheme(value as MoodTheme);
      
      // Remove flash and transition class
      setTimeout(() => {
        document.body.removeChild(flash);
        document.body.classList.remove('mood-theme-transition');
        setIsAnimating(false);
      }, 400);
    }, 100);
  };
  
  if (!mounted) {
    return <div className="h-10"></div>;
  }
  
  const getThemeIcon = (theme: MoodTheme) => {
    switch (theme) {
      case 'lofi': return <Headphones className="h-4 w-4" />;
      case 'cafe': return <Coffee className="h-4 w-4" />;
      case 'hacker': return <Moon className="h-4 w-4" />;
      case 'light-dev': return <Sun className="h-4 w-4" />;
    }
  };

  const getThemeName = (theme: MoodTheme) => {
    switch (theme) {
      case 'lofi': return "Lo-fi";
      case 'cafe': return "Café";
      case 'hacker': return "Hacker";
      case 'light-dev': return "Light";
    }
  };
  
  // Mobile view with toggle group (original design)
  if (isMobile) {
    return (
      <div className="flex items-center space-x-2">
        <ToggleGroup type="single" value={moodTheme} onValueChange={handleThemeChange}>
          {(['light-dev', 'lofi', 'cafe', 'hacker'] as MoodTheme[]).map((theme) => (
            <ToggleGroupItem 
              key={theme} 
              value={theme} 
              aria-label={`Switch to ${theme} theme`}
              className="px-3 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              disabled={isAnimating}
            >
              <span className="flex items-center gap-1.5">
                {getThemeIcon(theme)}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    );
  }
  
  // Desktop view with dropdown (new design)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          <span>Mood</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={moodTheme} onValueChange={handleThemeChange}>
          {(['light-dev', 'lofi', 'cafe', 'hacker'] as MoodTheme[]).map((theme) => (
            <DropdownMenuRadioItem
              key={theme}
              value={theme}
              disabled={isAnimating}
              className="gap-2"
            >
              {getThemeIcon(theme)}
              <span>{getThemeName(theme)}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
