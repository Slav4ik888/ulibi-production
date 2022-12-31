import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'app/providers/router/config';
import { selectUserAuthData } from 'entities/user';
import { SideBarItemType } from '../types';
import ListIcon from 'shared/assets/icons/list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';



// @ts-ignore
export const selectSideBarItems = createSelector(
  selectUserAuthData,
  (userData) => {
    const sideBarItemsList: SideBarItemType[] = [
      {
        path     : RoutePath.MAIN,
        label    : 'Главная',
        icon     : HomeIcon
      },
      {
        path     : RoutePath.ABOUT,
        label    : 'О сайте',
        icon     : ListIcon
      }
    ];

    if (userData) {
      sideBarItemsList.push({
          path     : RoutePath.ARTICLES,
          label    : 'Статьи',
          icon     : ArticleIcon,
          authOnly : true
        },
        {
          path     : `${RoutePath.PROFILE}/${userData?.id}`,
          label    : 'Профиль пользователя',
          icon     : ProfileIcon,
          authOnly : true
        }
      )
    }

    return sideBarItemsList
  }
)
