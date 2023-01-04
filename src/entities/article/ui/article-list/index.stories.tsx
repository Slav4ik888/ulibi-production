import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { ArticleList } from '.';


export default {
  title     : 'article/ArticleList',
  component : ArticleList,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleList>;


const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

// LIGHT THEME
export const Clear = Template.bind({});
Clear.args = {
  children : 'Text'
};

// DARK THEME
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text'
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
