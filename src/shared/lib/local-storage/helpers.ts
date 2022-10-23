import { Theme } from 'app/providers/theme/lib/context';
import { User } from 'entities/user/model';
import { setStorageData, getStorageData, removeStorageData } from './main';


export const setTheme  = (data: Theme) => setStorageData('Theme', data);
export const getTheme  = (): Theme     => getStorageData('Theme') as Theme;

export const setAuth   = (user: User)  => setStorageData('AuthData', user);
export const getAuth   = ()            => getStorageData('AuthData') as User;
export const clearAuth = ()            => removeStorageData('AuthData');
