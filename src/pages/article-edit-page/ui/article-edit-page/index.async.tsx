import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => import('./index'));

// export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
//   // @ts-ignore
//   setTimeout(() => resolve(import('./index')), 500)
// }));
