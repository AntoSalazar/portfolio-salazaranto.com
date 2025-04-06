
import { createContext, useContext, useEffect, useState } from "react";

// Define available mood themes
export type MoodTheme = "light-dev" | "lofi" | "cafe" | "hacker";

type MoodThemeContextProps = {
  moodTheme: MoodTheme;
  setMoodTheme: (theme: MoodTheme) => void;
};

const MoodThemeContext = createContext<MoodThemeContextProps>({
  moodTheme: "light-dev",
  setMoodTheme: () => null,
});

export function MoodThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize from localStorage if available, otherwise default to light-dev
  const [moodTheme, setMoodTheme] = useState<MoodTheme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("mood-theme") as MoodTheme;
      return storedTheme || "light-dev";
    }
    return "light-dev";
  });

  // Apply theme classes to the document when theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Remove all mood theme classes
    document.documentElement.classList.remove(
      "mood-light-dev", 
      "mood-lofi", 
      "mood-cafe", 
      "mood-hacker"
    );
    
    // Add the selected theme class
    document.documentElement.classList.add(`mood-${moodTheme}`);
    
    // Save to localStorage
    localStorage.setItem("mood-theme", moodTheme);
  }, [moodTheme]);

  // Create context value
  const value = {
    moodTheme,
    setMoodTheme,
  };

  return (
    <MoodThemeContext.Provider value={value}>
      {children}
    </MoodThemeContext.Provider>
  );
}

// Hook to use the mood theme
export function useMoodTheme() {
  const context = useContext(MoodThemeContext);
  if (context === undefined) {
    throw new Error("useMoodTheme must be used within a MoodThemeProvider");
  }
  return context;
}
