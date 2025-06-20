import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Article } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ArticleDetail() {
  const [, params] = useRoute("/article/:id");
  const articleId = params?.id ? parseInt(params.id) : null;

  const { data: article, isLoading, isError } = useQuery<Article>({
    queryKey: [`/api/articles/${articleId}`],
    enabled: articleId !== null,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 flex-grow py-8">
          <div className="animate-pulse mt-6 max-w-3xl mx-auto">
            <div className="h-8 bg-muted rounded-md mb-4 w-3/4"></div>
            <div className="h-4 bg-muted rounded-md mb-6 w-1/2"></div>
            <div className="h-64 bg-muted rounded-md mb-8"></div>
            <div className="h-4 bg-muted rounded-md mb-2 w-full"></div>
            <div className="h-4 bg-muted rounded-md mb-2 w-full"></div>
            <div className="h-4 bg-muted rounded-md mb-2 w-3/4"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <Link href="/">
              <Button className="responsive-btn bg-primary text-white">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = format(new Date(article.publishedAt), 'MMM dd, yyyy');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-6 md:py-10 max-w-4xl">
          <div className="mb-6">
            <Button 
              asChild 
              variant="ghost" 
              className="text-sm group mb-6 hover:bg-transparent p-0"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-[-2px] transition-transform" />
                Back to stories
              </Link>
            </Button>
          
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {article.category && (
                <Badge variant="outline" className="text-xs font-medium">
                  {article.category}
                </Badge>
              )}
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {formattedDate}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime} min read
              </div>
            </div>
            
            {article.excerpt && (
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">{article.excerpt}</p>
            )}
          </div>
          
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-border">
              <img 
                src={article.author.avatarUrl} 
                alt={article.author.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{article.author.name}</p>
              <p className="text-sm text-muted-foreground">
                Published on {formattedDate}
              </p>
            </div>
          </div>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            {article.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center mb-12">
            <Button 
              asChild 
              className="responsive-btn bg-primary"
            >
              <Link href="/">
                Browse more stories
              </Link>
            </Button>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
