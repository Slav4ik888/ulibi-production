import { ArticleImageBlock } from '../../model/types';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import s from './index.module.scss';
import { TextAlign, Text } from 'shared/ui';



interface Props {
  className? : string
  block      : ArticleImageBlock
}


export const ArticleImageBlockComponent = memo(({ className, block }: Props) => {
  const
    { title, src } = block,
    { t } = useTranslation();

  return (
    <div className={cn(s.root, {}, [className])}>
      <img src={src} className={s.image} alt={title} />
      {
        title && (
          <Text text={title} align={TextAlign.CENTER} />
        )
      }
    </div>
  )
});
