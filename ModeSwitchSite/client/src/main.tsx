import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch } from 'wouter';
import { ThemeProvider } from './components/ThemeProvider';
import './index.css';
import ArticleDetail from './pages/ArticleDetail';
import Home from './pages/Home';
import NotFound from './pages/not-found';
import { queryClient } from './lib/queryClient';
import { Toaster } from './components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/articles/:id" component={ArticleDetail} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
); 