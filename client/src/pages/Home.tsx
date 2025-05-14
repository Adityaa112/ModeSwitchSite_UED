import { useQuery } from "@tanstack/react-query";
import { Article } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(6);
  
  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Trending</h2>
            
            {isLoading ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-card rounded-lg h-80 animate-pulse"></div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {articles?.slice(0, visibleCount).map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
                
                {articles && visibleCount < articles.length && (
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={handleLoadMore} 
                      variant="outline"
                      className="px-6 py-2 bg-white dark:bg-card border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
