import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchArticleById } from '../lib/queryClient';

export default function ArticleDetail() {
  const [, params] = useRoute('/articles/:id');
  const articleId = params?.id ? parseInt(params.id) : 0;

  const { data: article, isLoading, error } = useQuery({
    queryKey: ['article', articleId],
    queryFn: () => fetchArticleById(articleId),
    enabled: !!articleId
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-destructive">Article not found</h1>
          <p className="mt-4 text-foreground">The article you're looking for doesn't exist or has been removed.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">{article.title}</h1>
          
          <div className="flex items-center mb-6">
            <img 
              src={article.author.avatarUrl} 
              alt={article.author.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="text-foreground font-medium">{article.author.name}</p>
              <p className="text-muted-foreground text-sm">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} · {article.readTime} min read
              </p>
            </div>
          </div>
          
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 rounded-lg overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-foreground">{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-bold mb-4 text-foreground">About the author</h3>
          <div className="flex items-center">
            <img 
              src={article.author.avatarUrl} 
              alt={article.author.name}
              className="w-16 h-16 rounded-full mr-6"
            />
            <div>
              <p className="text-foreground font-medium text-lg">{article.author.name}</p>
              <p className="text-muted-foreground mt-1">
                Expert in {article.category}
              </p>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
} 