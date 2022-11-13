import { AboutPage, MainPage, NotFoundPage, ProfilePage } from 'pages';
import { RouteProps } from 'react-router-dom';



type ApprouteProps = RouteProps & {
  authOnly?: boolean
}


export enum AppRoutes {
  MAIN      = 'MAIN',
  ABOUT     = 'ABOUT',
  PROFILE   = 'PROFILE',
  NOT_FOUND = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]      : '/',
  [AppRoutes.ABOUT]     : '/about',
  [AppRoutes.PROFILE]   : '/profile',
  [AppRoutes.NOT_FOUND] : '*'
}

export const routeConfig: Record<AppRoutes, ApprouteProps> = {
  [AppRoutes.MAIN]: {
    path     : RoutePath.MAIN,
    element  : <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path     : RoutePath.ABOUT,
    element  : <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path     : RoutePath.PROFILE,
    element  : <ProfilePage />,
    authOnly : true
  },
  [AppRoutes.NOT_FOUND]: {
    path     : RoutePath.NOT_FOUND,
    element  : <NotFoundPage />
  }
}
