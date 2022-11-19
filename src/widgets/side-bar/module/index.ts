import ListIcon from 'shared/assets/icons/list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'app/providers/router/config';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SideBarItemType {
  path      : string
  label     : string
  icon      : React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly? : boolean
}

export const sideBarItemsList: SideBarItemType[] = [
  {
    path     : RoutePath.MAIN,
    label    : 'Главная',
    icon     : HomeIcon
  }, {
    path     : RoutePath.ABOUT,
    label    : 'О сайте',
    icon     : ListIcon
  }, {
    path     : RoutePath.ARTICLES,
    label    : 'Статьи',
    icon     : ArticleIcon,
    authOnly : true
  }, {
    path     : RoutePath.PROFILE,
    label    : 'Профиль пользователя',
    icon     : ProfileIcon,
    authOnly : true
  }
];
