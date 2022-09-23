import { FC } from "react"
import { RoutePath } from "shared/config"
import { cn } from "shared/lib"
import { AppLink, AppLinkTheme } from "shared/ui";
import s from './index.module.scss';


interface Props {
  classNames?: string;
}


export const Navbar: FC<Props> = ({ classNames }) => {
  return (
    <div className={cn(s.root, {}, [classNames])}>
      <div className={s.links}>
        <AppLink
          to        = {RoutePath.MAIN}
          theme     = {AppLinkTheme.SECONDARY}
          children  = 'Главная'
          className = {s.mainLink}
        />
        <AppLink
          to        = {RoutePath.ABOUT}
          theme     = {AppLinkTheme.SECONDARY}
          children  = 'О сайте'
        />
      </div>
    </div>
  )
};
