import { selectUserAuthData } from 'entities/user';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { SideBarItemType } from '../../model/types';
import s from './index.module.scss';



interface Props {
  item      : SideBarItemType
  collapsed : boolean
}


export const SideBarItem: FC<Props> = memo(({ item, collapsed }: Props) => {
  const
    { path, icon: Icon, label } = item,
    { t } = useTranslation(),
    isAuth = useSelector(selectUserAuthData);

  if (!isAuth && item.authOnly) return null

  return (
    <AppLink
      to        = {path}
      theme     = {AppLinkTheme.SECONDARY}
      className = {cn(s.item, { [s.collapsed]: collapsed })}
    >
      <Icon className={s.icon} />
      <span className={s.link}>{t(label)}</span>
    </AppLink>
  )
});
