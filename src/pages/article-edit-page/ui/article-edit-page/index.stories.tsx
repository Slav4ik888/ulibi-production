import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import ArticleEditPage from '.';


export default {
  title     : 'pages/ArticleEditPage',
  component : ArticleEditPage,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleEditPage>;

const
  Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
