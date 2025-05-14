import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Article } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

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
        <div className="container mx-auto px-4 flex-grow">
          <div className="animate-pulse mt-10">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-6 w-1/2"></div>
            <div className="h-72 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
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
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <Link href="/">
              <Button className="bg-primary text-white px-4 py-2 rounded-full">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 pt-6">
        <Link href="/">
          <Button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 inline-flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to homepage
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{article.excerpt}</p>
        
        <div className="mb-8">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img 
              src={article.author.avatarUrl} 
              alt={article.author.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{article.author.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(article.publishedAt), 'MMM dd, yyyy')}
            </p>
          </div>
        </div>
        
        <div className="prose dark:prose-invert max-w-none mb-12">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="flex justify-center mb-12">
          <button className="inline-flex items-center text-primary hover:underline font-medium">
            READ MORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
