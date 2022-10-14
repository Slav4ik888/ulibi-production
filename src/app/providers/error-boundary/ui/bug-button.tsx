import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Button } from 'shared/ui';
import s from './index.module.scss';


interface Props {
  className? : string;
  short?     : boolean;
}

/** For development testing */
export const BugButton: FC<Props> = ({ short, className }) => {
  const
    { t } = useTranslation('errors'),
    label = t(short ? 'Err' : 'Бросить ошибку'),
    [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error()
  }, [error]);

  return (
    <Button
      className = {cn(s.root, {}, [className])}
      onClick   = {onThrow}
    >
      {label}
    </Button>
  )
};

BugButton.defaultProps = {
  className : '',
  short     : false
};
