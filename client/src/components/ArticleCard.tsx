import { Link } from "wouter";
import { Article } from "@shared/schema";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="article-card bg-white dark:bg-card rounded-lg overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
            <img 
              src={article.author.avatarUrl} 
              alt={article.author.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            By {article.author.name}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {article.readTime} min read
        </p>
        <Link 
          to={`/article/${article.id}`} 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          READ MORE
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
