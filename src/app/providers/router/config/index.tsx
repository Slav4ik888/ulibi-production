import { AboutPage, ArticlesPage, ArticlePageDetails, MainPage, NotFoundPage, ProfilePage } from 'pages';
import { RouteProps } from 'react-router-dom';



export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}


export enum AppRoutes {
  MAIN             = 'MAIN',
  ABOUT            = 'ABOUT',
  PROFILE          = 'PROFILE',
  ARTICLES         = 'ARTICLES',
  ARTICLES_DETAILS = 'ARTICLES_DETAILS',
  NOT_FOUND        = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]             : '/',
  [AppRoutes.ABOUT]            : '/about',
  [AppRoutes.PROFILE]          : '/profile', // + id
  [AppRoutes.ARTICLES]         : '/articles',
  [AppRoutes.ARTICLES_DETAILS] : '/articles-details', // + id
  [AppRoutes.NOT_FOUND]        : '*'
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
  [AppRoutes.ARTICLES_DETAILS]: {
    path     : `${RoutePath.ARTICLES_DETAILS}/:id`,
    element  : <ArticlePageDetails />,
    authOnly : true
  },
  [AppRoutes.NOT_FOUND]: {
    path     : RoutePath.NOT_FOUND,
    element  : <NotFoundPage />
  }
}
