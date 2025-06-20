import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import { fetchArticles } from '../lib/queryClient';

export default function Home() {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Latest Articles</h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center text-destructive">Failed to load articles</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles?.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
} 