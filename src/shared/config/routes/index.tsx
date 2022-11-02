
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
