import { ComponentStory, ComponentMeta } from '@storybook/react';
import { State } from 'app/providers/store';
import { Theme } from 'app/providers/theme';
import { Article } from 'entities/article';
import { ArticleBlockType, ArticleType } from 'entities/article/model/types';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { ARTICLE } from 'shared/lib/tests/__mocks__';
import { ArticleDetails } from '.';


export default {
  title     : 'entities/ArticleDetails',
  component : ArticleDetails,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetails>;


const
  Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />,
  store: Partial<State> = {
    articleDetails: {
      data: ARTICLE,
      loading: false
    }
  }


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  id: '1'
};
Primary.decorators = [StoreDecorator(store)];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  articleDetails: {
    loading: true
  }
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  articleDetails: {
    error: 'Fucking error'
  }
})];

// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  id: '1'
};
PrimaryDark.decorators = [StoreDecorator(store), ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  articleDetails: {
    loading: true
  }
})];

export const ErrorDark = Template.bind({});
ErrorDark.args = {};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  articleDetails: {
    error: 'Fucking error'
  }
})];

// ORANGE THEME
export const PrimaryOrangeDark = Template.bind({});
PrimaryOrangeDark.args = {
  id: '1'
};
PrimaryOrangeDark.decorators = [StoreDecorator(store), ThemeDecorator(Theme.ORANGE_DARK)];

export const LoadingOrange = Template.bind({});
LoadingOrange.args = {};
LoadingOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK), StoreDecorator({
  articleDetails: {
    loading: true
  }
})];

export const ErrorOrange = Template.bind({});
ErrorOrange.args = {};
ErrorOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK), StoreDecorator({
  articleDetails: {
    error: 'Fucking error'
  }
})];
