import { ArticleCodeBlock } from '../../model/types';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Code } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  className? : string
  block      : ArticleCodeBlock
}


export const ArticleCodeBlockComponent = memo(({ className, block }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.root, {}, [className])}>
      <Code code={block.code} />
    </div>
  )
});
