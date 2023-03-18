import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StateSchema } from 'app/providers/store';
import { Theme } from 'app/providers/theme';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { MOCK_ARTICLE } from 'shared/lib/tests/__mocks__';
import { ArticleComponent } from '.';


export default {
  title     : 'entities/ArticleComponent',
  component : ArticleComponent,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleComponent>;


const
  Template: ComponentStory<typeof ArticleComponent> = (args) => <ArticleComponent {...args} />,
  store: Partial<StateSchema> = {
    article: {
      data: MOCK_ARTICLE,
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
  article: {
    loading: true
  }
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  article: {
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
  article: {
    loading: true
  }
})];

export const ErrorDark = Template.bind({});
ErrorDark.args = {};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  article: {
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
  article: {
    loading: true
  }
})];

export const ErrorOrange = Template.bind({});
ErrorOrange.args = {};
ErrorOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK), StoreDecorator({
  article: {
    error: 'Fucking error'
  }
})];
