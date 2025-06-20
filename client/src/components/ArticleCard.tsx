import { Link } from "wouter";
import { Article } from "@shared/schema";
import { useTheme } from "./ThemeProvider";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { format } from "date-fns";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { theme } = useTheme();
  const formattedDate = format(new Date(article.publishedAt), 'MMM dd, yyyy');
  
  return (
    <Link to={`/article/${article.id}`}>
      <article className="article-card rounded-xl overflow-hidden h-full flex flex-col bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 cursor-pointer">
        <div className="relative h-40 sm:h-48 overflow-hidden group">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {article.featured && (
            <Badge className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-xs">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="p-3 sm:p-5 flex-grow flex flex-col">
          <div className="flex items-center gap-x-2 sm:gap-x-3 mb-2 sm:mb-3">
            {article.category && (
              <Badge variant="outline" className="text-xs font-medium px-2 py-0 h-5">
                {article.category}
              </Badge>
            )}
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {formattedDate}
            </div>
          </div>
          
          <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
          
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
            {article.excerpt || article.title}
          </p>
          
          <div className="mt-auto pt-3 sm:pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2 border border-border">
                <img 
                  src={article.author.avatarUrl} 
                  alt={article.author.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium">
                {article.author.name}
              </span>
            </div>
            
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {article.readTime} min
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
