
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Add transition to body
    document.body.classList.add('theme-transition');
    
    // Animate a flash effect
    const flash = document.createElement('div');
    flash.className = 'theme-flash';
    document.body.appendChild(flash);
    
    // Set new theme after a short delay
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(flash);
        document.body.classList.remove('theme-transition');
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  // Don't render the button until mounted to avoid hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10"></div>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full relative overflow-hidden transition-all"
      aria-label="Toggle theme"
      disabled={isAnimating}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      
      {/* Ripple effect */}
      <span className={`absolute inset-0 rounded-full transition-colors duration-300
        ${theme === 'light' 
          ? 'bg-gradient-to-r from-orange-300/0 via-orange-300/10 to-orange-300/0' 
          : 'bg-gradient-to-r from-blue-900/0 via-blue-900/10 to-blue-900/0'}`
      }></span>
    </Button>
  );
}
