import { FC, lazy } from 'react';
import { Props } from './index';


export const LoginFormAsync = lazy<FC<Props>>(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./index')), 500)
}));
