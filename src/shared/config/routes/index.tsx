
export enum AppRoutes {
  MAIN  = 'MAIN',
  ABOUT = 'ABOUT',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]  : '/',
  [AppRoutes.ABOUT] : '/about'
}
