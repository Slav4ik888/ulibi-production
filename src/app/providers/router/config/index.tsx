import { AboutPage, MainPage, NotFoundPage, ProfilePage } from 'pages';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routes';


export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path    : RoutePath.MAIN,
    element : <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path    : RoutePath.ABOUT,
    element : <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path    : RoutePath.PROFILE,
    element : <ProfilePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path    : RoutePath.NOT_FOUND,
    element : <NotFoundPage />
  }
}
