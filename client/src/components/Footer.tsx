import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-card py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} YesBlog. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              About
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Contact
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
