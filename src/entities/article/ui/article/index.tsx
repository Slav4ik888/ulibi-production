import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';
import { articleReducer } from '../../model/slice';
import { fetchArticleById } from '../../model/services';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { useSelector } from 'react-redux';
import {
  selectArticleData, selectArticleError, selectArticleLoading
} from '../../model/selectors';
import { Avatar, IconWrapper, Skeleton, Text, TextAlign, TextSize } from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleBlock } from '../../model/types';
import { ArticleImageBlockComponent } from '../article-image-block';
import { ArticleCodeBlockComponent } from '../article-code-block';
import { ArticleTextBlockComponent } from '../article-text-block';
import s from './index.module.scss';
import { HStack, VStack } from 'shared/ui/stack';



const reducers: ReducersList = {
  article: articleReducer
}


interface Props {
  id?        : string
  className? : string
}


export const ArticleComponent = memo(({ id, className }: Props) => {
  const { t }    = useTranslation('article');
  const dispatch = useAppDispatch();
  const article  = useSelector(selectArticleData);
  const loading  = useSelector(selectArticleLoading);
  const error    = useSelector(selectArticleError);


  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'CODE':
        return <ArticleCodeBlockComponent key={block.id} block={block} className={s.block} />;

      case 'IMAGE':
        return <ArticleImageBlockComponent key={block.id} block={block} className={s.block} />;

      case 'TEXT':
        return <ArticleTextBlockComponent key={block.id} block={block} className={s.block} />;


      default: return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
  }, [id, dispatch]);

  let content;

  if (loading) {
    content = (
      <VStack fullWidth gap='16'>
        <Skeleton className={s.avatar} width={100} height={100} borderRadius='50%' />
        <Skeleton className={s.title} width={400} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width='100%' height={200} />
        <Skeleton className={s.skeleton} width='100%' height={200} />
        <Skeleton className={s.skeleton} width='100%' height={200} />
      </VStack>
    )
  }
  else if (error) {
    content = (
      <Text
        align = {TextAlign.CENTER}
        title = {t('Ошибка при загрузке статьи')}
      />
    )
  }
  else {
    content = (
      <>
        <HStack fullWidth justify='center'>
          <Avatar
            size      = {200}
            src       = {article?.img || ''}
            alt       = {t('Аватарка')}
            className = {s.avatar}
          />
        </HStack>
        <VStack>
          <Text
            title = {article?.title}
            text  = {article?.subtitle}
            className = {s.title}
          />
          <HStack gap='8' align='center'>
            <IconWrapper Svg={EyeIcon} className={s.icon} />
            <Text
              text = {String(article?.views)}
              size = {TextSize.S}
            />
          </HStack>
          <HStack gap='8' align='center'>
            <IconWrapper Svg={CalendarIcon} className={s.icon} />
            <Text
              text = {article?.createdAt}
              size = {TextSize.S}
            />
          </HStack>
          {
            article?.blocks?.length && article.blocks.map(renderBlock)
          }
        </VStack>
      </>
    )
  }


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        fullWidth
        gap       = '16'
        className = {cn(s.root, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
});
