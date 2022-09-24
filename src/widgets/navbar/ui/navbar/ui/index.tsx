import { FC } from "react"
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config"
import { cn } from "shared/lib"
import { AppLink, AppLinkTheme } from "shared/ui";
import s from './index.module.scss';


interface Props {
  classNames?: string;
}


export const Navbar: FC<Props> = ({ classNames }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.root, {}, [classNames])}>
      <div className={s.links}>
        <AppLink
          to        = {RoutePath.MAIN}
          theme     = {AppLinkTheme.SECONDARY}
          children  = {t('Главная')}
          className = {s.mainLink}
        />
        <AppLink
          to        = {RoutePath.ABOUT}
          theme     = {AppLinkTheme.SECONDARY}
          children  = {t('О сайте')}
        />
      </div>
    </div>
  )
};
