import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme") as 'light' | 'dark' | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      return (savedTheme === "dark" || (!savedTheme && prefersDark)) ? "dark" : "light";
    }
    return 'light'; // Default to light theme
  });

  useEffect(() => {
    // Apply theme class to document
    const htmlElement = document.documentElement;
    
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    
    // Save theme preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <h1 className="text-3xl font-bold text-center">
            <Link href="/" className="hover:text-primary transition-colors">
              YesBlog
            </Link>
          </h1>
          <Button 
            onClick={toggleTheme} 
            className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="mr-2 h-4 w-4" />
                Switch to Light Mode
              </>
            ) : (
              <>
                <Moon className="mr-2 h-4 w-4" />
                Switch to Dark Mode
              </>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
