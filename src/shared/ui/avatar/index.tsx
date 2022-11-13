import { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import s from './index.module.scss';



export interface Props {
  src        : string
  alt        : string
  size?      : number
  className? : string
}


export const Avatar: FC<Props> = ({ className, size, src, alt }) => {
  const
    { t } = useTranslation(),
    style = useMemo<CSSProperties>(() => ({
      width  : size || 100,
      height : size || 100
    }), [size]);


  return (
    <img
      src       = {src}
      style     = {style}
      className = {cn(s.root, {}, [className])}
      alt       = {alt}
    />
  )
};
