import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, X, PenLine } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border py-3 md:py-4 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            <Link href="/" className="hover:text-primary transition-colors flex items-center">
              <PenLine className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2" />
              <span className="text-primary mr-1">Inspire</span>Press
            </Link>
          </h1>

          {/* Mobile menu button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleTheme}
              className="md:hidden"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          )}

          {/* Desktop theme toggle */}
          {!isMobile && (
            <Button 
              onClick={toggleTheme} 
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
