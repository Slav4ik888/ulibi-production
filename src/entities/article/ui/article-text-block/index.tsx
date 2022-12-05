import { ArticleTextBlock } from 'entities/article/model/types';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { Text } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  className? : string
  block      : ArticleTextBlock
}


export const ArticleTextBlockComponent = memo(({ className, block }: Props) => {
  const
    { title, paragraphs } = block,
    { t } = useTranslation();

  return (
    <div className={cn(s.root, {}, [className])}>
      {
        title && (
          <Text title={title} className={s.title} />
        )
      }
      {
        paragraphs?.map(paragraph => (
          <Text
            key       = {paragraph}
            text      = {paragraph}
            className = {s.paragraph}
          />
        ))
      }
    </div>
  )
});
