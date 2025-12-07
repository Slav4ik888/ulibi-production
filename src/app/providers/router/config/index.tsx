import { AboutPage } from 'pages/about-page';
import { ArticlePageDetails } from 'pages/article-details-page';
import { ArticleEditPage } from 'pages/article-edit-page';
import { ArticlesPage } from 'pages/articles-page';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/not-found';
import { ProfilePage } from 'pages/profile';
import { RouteProps } from 'react-router-dom';



export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}


export enum AppRoutes {
  MAIN             = 'MAIN',
  ABOUT            = 'ABOUT',
  PROFILE          = 'PROFILE',
  ARTICLES         = 'ARTICLES',
  ARTICLE_DETAILS  = 'ARTICLE_DETAILS',
  ARTICLE_ADD      = 'ARTICLE_ADD',
  ARTICLE_EDIT     = 'ARTICLE_EDIT',
  NOT_FOUND        = 'NOT_FOUND'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]            : '/',
  [AppRoutes.ABOUT]           : '/about',
  [AppRoutes.PROFILE]         : '/profile', // + /id
  [AppRoutes.ARTICLES]        : '/articles',
  [AppRoutes.ARTICLE_DETAILS] : '/article-details', // + id
  [AppRoutes.ARTICLE_ADD]     : '/article-details/add',
  [AppRoutes.ARTICLE_EDIT]    : '/article-details/:id/edit',
  [AppRoutes.NOT_FOUND]       : '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path     : RoutePath.MAIN,
    element  : <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path     : RoutePath.ABOUT,
    element  : <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path     : `${RoutePath.PROFILE}/:id`,
    element  : <ProfilePage />,
    authOnly : true
  },
  [AppRoutes.ARTICLES]: {
    path     : RoutePath.ARTICLES,
    element  : <ArticlesPage />,
    authOnly : true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path     : `${RoutePath.ARTICLE_DETAILS}/:id`,
    element  : <ArticlePageDetails />,
    authOnly : true
  },
  [AppRoutes.ARTICLE_ADD]: {
    path     : `${RoutePath.ARTICLE_ADD}`,
    element  : <ArticleEditPage />,
    authOnly : true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path     : `${RoutePath.ARTICLE_EDIT}`,
    element  : <ArticleEditPage />,
    authOnly : true
  },
  [AppRoutes.NOT_FOUND]: {
    path     : RoutePath.NOT_FOUND,
    element  : <NotFoundPage />
  }
}
