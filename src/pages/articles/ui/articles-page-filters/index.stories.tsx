import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { ArticlePageFilters } from '.';


export default {
  title     : 'pages/ArticlePageFilters',
  component : ArticlePageFilters,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlePageFilters>;

const
  Template: ComponentStory<typeof ArticlePageFilters> = () => <ArticlePageFilters />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
