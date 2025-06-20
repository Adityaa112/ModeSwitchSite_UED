import { useQuery } from "@tanstack/react-query";
import { Article } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ThemeProvider";
import { Sparkles, Mail } from "lucide-react";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(6);
  const { theme } = useTheme();
  
  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Stories</h2>
            <p className="text-muted-foreground mt-1">Click on any story to read more</p>
          </div>
          
          <Separator className="mb-8" />
          
          {isLoading ? (
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index} 
                  className="bg-muted rounded-xl h-[250px] sm:h-[300px] animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles?.slice(0, visibleCount).map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
              
              {articles && visibleCount < articles.length && (
                <div className="mt-8 sm:mt-12 text-center">
                  <Button 
                    onClick={handleLoadMore} 
                    variant="outline"
                    className="responsive-btn border-primary text-primary hover:bg-primary/10"
                  >
                    <Sparkles className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Load More Stories
                  </Button>
                </div>
              )}
            </>
          )}
          
          <div className="mt-12 sm:mt-16 mb-8 rounded-xl bg-muted p-6 sm:p-8 md:p-12">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Get the latest stories and ideas delivered to your inbox. No spam, unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <Button className="responsive-btn bg-primary hover:bg-primary/90">
                  <Mail className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
