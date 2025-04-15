
import React from "react";
import { Button } from "@/components/ui/button";

interface ThemeSelectorProps {
  themes: string[];
  selectedTheme: string | null;
  onSelectTheme: (theme: string | null) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ 
  themes, 
  selectedTheme, 
  onSelectTheme 
}) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      <Button
        variant={!selectedTheme ? "default" : "outline"}
        onClick={() => onSelectTheme(null)}
        className={!selectedTheme 
          ? "bg-irsystem-primary hover:bg-irsystem-secondary text-white" 
          : "border-irsystem-secondary text-irsystem-secondary hover:bg-irsystem-accent"
        }
      >
        All Topics
      </Button>
      
      {themes.map((theme) => (
        <Button
          key={theme}
          variant={selectedTheme === theme ? "default" : "outline"}
          onClick={() => onSelectTheme(theme)}
          className={selectedTheme === theme 
            ? "bg-irsystem-primary hover:bg-irsystem-secondary text-white" 
            : "border-irsystem-secondary text-irsystem-secondary hover:bg-irsystem-accent"
          }
        >
          {theme}
        </Button>
      ))}
    </div>
  );
};

export default ThemeSelector;
