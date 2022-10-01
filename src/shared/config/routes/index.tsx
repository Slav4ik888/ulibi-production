
export enum AppRoutes {
  MAIN      = 'MAIN',
  ABOUT     = 'ABOUT',
  NOT_FOUND = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]      : '/',
  [AppRoutes.ABOUT]     : '/about',
  [AppRoutes.NOT_FOUND] : '*'
}
