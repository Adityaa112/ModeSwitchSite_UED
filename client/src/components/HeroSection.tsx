import { useTheme } from "./ThemeProvider";
import { PenLine } from "lucide-react";

export default function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <section className="relative mb-12">
      <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative">
        <img 
          src="https://picsum.photos/id/101/1920/800" 
          alt="Modern cityscape with tall buildings" 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${theme === 'dark' 
          ? 'bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-950/80' 
          : 'bg-gradient-to-r from-blue-50/90 via-white/70 to-blue-50/80'}`}></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 max-w-6xl">
          <div className="rounded-md bg-background/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 border border-border/40">
            <div className="flex items-center mb-4">
              <PenLine className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary mr-2" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-primary">Inspire</span>Press
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl">
              Thought-provoking stories and ideas to inspire your creative journey. Discover perspectives that change how you see the world.
            </p>
          </div>
        </div>
        
        {/* Theme indicator badge */}
        <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium">
          {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </div>
      </div>
    </section>
  );
}
