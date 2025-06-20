import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

// API base URL that adapts to the environment
export const getBaseUrl = () => {
  // In production (Netlify), use the Netlify function
  if (import.meta.env.PROD) {
    return '/.netlify/functions/api';
  }
  // In development, use the local server
  return '/api';
};

// Fetch articles
export const fetchArticles = async () => {
  const response = await fetch(`${getBaseUrl()}/articles`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
};

// Fetch article by ID
export const fetchArticleById = async (id: number) => {
  const response = await fetch(`${getBaseUrl()}/articles/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch article');
  }
  return response.json();
}; 