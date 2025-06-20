import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, PenLine } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 - Logo and description */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
              <PenLine className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary mr-1">Inspire</span>Press
            </h2>
            <p className="text-muted-foreground mb-6">
              Inspiring minds through thoughtful content and diverse perspectives. Your source for insight and inspiration.
            </p>
            <Button 
              onClick={toggleTheme} 
              variant="outline" 
              className="responsive-btn w-full sm:w-auto text-center justify-center sm:justify-start"
            >
              Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </div>
          
          {/* Column 2 - Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">contact@inspirepress.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 md:mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} InspirePress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
