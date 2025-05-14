import { 
  users, 
  type User, 
  type InsertUser, 
  authors, 
  type Author, 
  type InsertAuthor,
  articles, 
  type ArticleDB, 
  type InsertArticle, 
  type Article 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Article methods
  getAllArticles(): Promise<Article[]>;
  getArticleById(id: number): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<ArticleDB>;
  
  // Author methods
  getAuthorById(id: number): Promise<Author | undefined>;
  createAuthor(author: InsertAuthor): Promise<Author>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private authors: Map<number, Author>;
  private articlesMap: Map<number, ArticleDB>;
  private userCurrentId: number;
  private authorCurrentId: number;
  private articleCurrentId: number;

  constructor() {
    this.users = new Map();
    this.authors = new Map();
    this.articlesMap = new Map();
    this.userCurrentId = 1;
    this.authorCurrentId = 1;
    this.articleCurrentId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  // Initialize with sample data for the blog
  private async initializeSampleData() {
    // Create sample authors
    const sampleAuthors = [
      {
        name: "Sam Altman",
        avatarUrl: "https://picsum.photos/id/1/50/50"
      },
      {
        name: "Reid Hoffman",
        avatarUrl: "https://picsum.photos/id/2/50/50"
      },
      {
        name: "Clara Wilson",
        avatarUrl: "https://picsum.photos/id/3/50/50"
      },
      {
        name: "Cruz McIntyre",
        avatarUrl: "https://picsum.photos/id/4/50/50"
      },
      {
        name: "Anna",
        avatarUrl: "https://picsum.photos/id/5/50/50"
      },
      {
        name: "Sophia Turner",
        avatarUrl: "https://picsum.photos/id/6/50/50"
      }
    ];
    
    const authors = await Promise.all(
      sampleAuthors.map(author => this.createAuthor(author))
    );
    
    // Create sample articles
    const sampleArticles = [
      {
        title: "The future of remote work: a world of opportunities",
        excerpt: "How remote work is reshaping the global economy and creating new possibilities.",
        content: "In today's hyperconnected world, the lines between work, leisure, and rest have blurred significantly. Notifications, emails, and constant information streams compete for our attention, often leaving us overwhelmed and unable to focus on what truly matters. The rise of remote work has accelerated this trend.\n\nHowever, this new paradigm also offers unprecedented opportunities for flexibility, creativity, and global collaboration. Companies that embrace remote work can access talent pools from around the world, while workers can find their ideal work-life balance.",
        imageUrl: "https://picsum.photos/id/180/800/400",
        readTime: 7,
        authorId: authors[0].id
      },
      {
        title: "How to build a successful startup",
        excerpt: "Key lessons from founders who navigated the challenges of building a startup.",
        content: "Building a successful startup requires more than just a great idea. It demands resilience, adaptability, and a deep understanding of your market. Most successful founders share common traits and approaches to building their companies.\n\nFirstly, they focus on solving real problems rather than creating solutions looking for problems. They validate their ideas early and often with potential customers. They iterate quickly based on feedback, not afraid to pivot when necessary.",
        imageUrl: "https://picsum.photos/id/20/800/400",
        readTime: 4,
        authorId: authors[1].id
      },
      {
        title: "Sustainable Travel Tips: Reducing Your Carbon Footprint",
        excerpt: "Practical advice for eco-conscious travelers to explore the world responsibly and sustainably.",
        content: "Traveling is one of life's great pleasures, but it often comes with a significant environmental cost. The good news is that with some mindful choices, you can significantly reduce your carbon footprint while still enjoying memorable experiences around the world.\n\nChoose destinations that can be reached by train or bus instead of flying when possible. If flying is necessary, book direct flights (takeoffs and landings use the most fuel) and consider airlines with newer, more fuel-efficient fleets.",
        imageUrl: "https://picsum.photos/id/30/800/400",
        readTime: 5,
        authorId: authors[2].id
      },
      {
        title: "A Foodie's Guide to Europe",
        excerpt: "Europe is a treasure trove of culinary delights, offering a diverse array of flavors, techniques, and traditions.",
        content: "Europe's culinary landscape is as diverse as its geography, with each region offering distinct flavors and cooking traditions shaped by history, climate, and cultural exchanges. From the Mediterranean diet of southern Europe to the hearty fare of the north, food tells the story of place and people.\n\nIn Italy, cuisine varies dramatically from region to region. Northern Italian cuisine features more butter, rice, and polenta, while southern Italian food embraces olive oil, tomatoes, and seafood. Don't miss the opportunity to taste authentic Neapolitan pizza in Naples, fresh pasta in Bologna, or seafood risotto in Venice.",
        imageUrl: "https://picsum.photos/id/40/800/400",
        readTime: 6,
        authorId: authors[3].id
      },
      {
        title: "The Art of Black-and-White Photography",
        excerpt: "Black-and-white photography is a timeless art form that transcends trends and technology.",
        content: "Black-and-white photography strips away the distraction of color to reveal the essential elements of an image: light, shadow, texture, and composition. By removing color, photographers draw viewers' attention to the emotional core of their subjects, creating images with a timeless quality that color photography often lacks.\n\nMastering black-and-white photography requires developing an eye for contrast and tonality. Where color photographers might look for complementary or harmonious colors, black-and-white photographers must train themselves to see in gradients of light and dark.",
        imageUrl: "https://picsum.photos/id/50/800/400",
        readTime: 4,
        authorId: authors[4].id
      },
      {
        title: "The Rise of Minimalist Interior Design",
        excerpt: "Learn how to create serene and functional spaces with the principles of minimalist interior design.",
        content: "Minimalist interior design embraces the philosophy that less is more. It focuses on creating spaces that feel open, uncluttered, and serene by using only essential elements. This approach not only creates visually appealing environments but also promotes a more mindful relationship with our possessions and spaces.\n\nAt its core, minimalist design is about intentionality—choosing quality over quantity and ensuring that every item in a space serves a purpose or brings genuine joy. This doesn't mean minimalist spaces must feel cold or impersonal; rather, they can be warm and inviting when thoughtfully designed.",
        imageUrl: "https://picsum.photos/id/60/800/400",
        readTime: 5,
        authorId: authors[5].id
      },
      {
        title: "Digital Declutter: Cutting the Noise in a Connected World",
        excerpt: "In today's hyperconnected world, the lines between work, leisure, and rest have blurred significantly.",
        content: "Our digital lives have become increasingly cluttered with apps, notifications, subscriptions, and endless streams of content competing for our attention. This constant barrage of information not only hampers productivity but can also negatively impact our mental wellbeing, leading to anxiety, poor concentration, and digital fatigue.\n\nA digital declutter involves intentionally reducing your digital footprint and creating healthier digital habits. Start by conducting an audit of your digital life: Which apps do you actually use? Which subscriptions provide value? Which notifications are truly urgent?",
        imageUrl: "https://picsum.photos/id/70/800/400",
        readTime: 6,
        authorId: authors[0].id
      }
    ];
    
    await Promise.all(
      sampleArticles.map(article => this.createArticle(article))
    );
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Author methods
  async getAuthorById(id: number): Promise<Author | undefined> {
    return this.authors.get(id);
  }
  
  async createAuthor(author: InsertAuthor): Promise<Author> {
    const id = this.authorCurrentId++;
    const newAuthor: Author = { ...author, id };
    this.authors.set(id, newAuthor);
    return newAuthor;
  }
  
  // Article methods
  async getAllArticles(): Promise<Article[]> {
    const articles = Array.from(this.articlesMap.values());
    const result: Article[] = [];
    
    for (const article of articles) {
      const author = await this.getAuthorById(article.authorId);
      if (author) {
        const articleWithAuthor: Article = {
          ...article,
          author
        };
        delete (articleWithAuthor as any).authorId;
        result.push(articleWithAuthor);
      }
    }
    
    return result;
  }
  
  async getArticleById(id: number): Promise<Article | undefined> {
    const article = this.articlesMap.get(id);
    if (!article) return undefined;
    
    const author = await this.getAuthorById(article.authorId);
    if (!author) return undefined;
    
    const articleWithAuthor: Article = {
      ...article,
      author
    };
    delete (articleWithAuthor as any).authorId;
    
    return articleWithAuthor;
  }
  
  async createArticle(insertArticle: InsertArticle): Promise<ArticleDB> {
    const id = this.articleCurrentId++;
    const now = new Date();
    const article: ArticleDB = { 
      ...insertArticle, 
      id, 
      publishedAt: now
    };
    this.articlesMap.set(id, article);
    return article;
  }
}

export const storage = new MemStorage();
