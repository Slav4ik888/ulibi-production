import { memo, useCallback } from 'react';
import { cn } from 'shared/lib';
import { IconWrapper } from '..';
import { Button } from '../button';
import s from './index.module.scss';
import CopyIcon from '../../assets/icons/copy.svg';


interface Props {
  className? : string
  code       : string
}


export const Code = memo(({ className, code }: Props) => {
  const handlerCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);


  return (
    <pre className={cn(s.root, {}, [className])}>
      <Button onClick={handlerCopy} className={s.copyBtn}>
        <CopyIcon className={s.copyIcon} />
      </Button>
      <code>
        {code}
      </code>
    </pre>
  )
});
