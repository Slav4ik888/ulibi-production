import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Button } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  className?: string;
}


export const LangSwitcher = memo(({ className }: Props) => {
  const
    { i18n } = useTranslation(),
    isEn     = i18n.language === 'ru',
    label    = isEn ? 'En' : 'Ru',
    toggle   = () => i18n.changeLanguage(isEn ? 'en' : 'ru');

  return (
    <Button
      className = {cn(s.root, {}, [className])}
      onClick   = {toggle}
    >
      {label}
    </Button>
  )
});
