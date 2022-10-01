import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui';
import s from './index.module.scss';


/** For development testing */
export const BugButton: FC = () => {
  const
    { t } = useTranslation(),
    [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error()
  }, [error]);

  return (
    <Button
      className = {s.root}
      onClick   = {onThrow}
    >
      {t('Бросить ошибку')}
    </Button>
  )
};
