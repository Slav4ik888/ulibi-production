import { RoutePath } from 'shared/config/routes';
import ListIcon from 'shared/assets/icons/list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';


export interface SideBarItemType {
  path  : string
  label : string
  icon  : React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sideBarItemsList: SideBarItemType[] = [
  {
    path  : RoutePath.MAIN,
    label : 'Главная',
    icon  : HomeIcon
  }, {
    path  : RoutePath.ABOUT,
    label : 'О сайте',
    icon  : ListIcon
  }, {
    path  : RoutePath.PROFILE,
    label : 'Профиль пользователя',
    icon  : ProfileIcon
  }
];
