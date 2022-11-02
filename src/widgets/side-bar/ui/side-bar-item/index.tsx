import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { SideBarItemType } from '../../module';
import s from './index.module.scss';



interface Props {
  item      : SideBarItemType
  collapsed : boolean
}


export const SideBarItem: FC<Props> = memo(({ item, collapsed }: Props) => {
  const
    { path, icon: Icon, label } = item,
    { t } = useTranslation();


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
