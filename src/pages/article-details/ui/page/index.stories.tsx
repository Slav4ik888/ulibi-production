import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import ArticlePageDetails from '.';


export default {
  title     : 'pages/ArticlePageDetails',
  component : ArticlePageDetails,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlePageDetails>;

const
  Template: ComponentStory<typeof ArticlePageDetails> = () => <ArticlePageDetails />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
