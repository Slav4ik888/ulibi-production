import { MainPage } from "pages/main"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN  = 'MAIN',
  ABOUT = 'ABOUT',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]  : `/`,
  [AppRoutes.ABOUT] : `/about`
}
