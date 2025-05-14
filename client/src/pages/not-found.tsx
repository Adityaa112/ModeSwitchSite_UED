import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Exploring New Articles</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Ideas, trends, and inspiration for a brighter future
          </p>
          
          <div className="mb-8">
            <Link href="/">
              <Button className="bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-opacity-90">
                Back to homepage
              </Button>
            </Link>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
