import { lazy } from 'react';

export const ArticlePageDetailsAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./index')), 500)
}));
