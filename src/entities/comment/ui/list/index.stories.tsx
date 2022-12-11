import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { CommentsList } from '.';
import { COMMENTS } from 'shared/lib/tests/__mocks__';


export default {
  title     : 'entities/CommentsList',
  component : CommentsList,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentsList>;


const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  comments: COMMENTS
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  comments: COMMENTS,
  loading: true
};


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  comments: COMMENTS
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkLoading = Template.bind({});
PrimaryDarkLoading.args = {
  comments: COMMENTS,
  loading: true
};
PrimaryDarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

// DARK THEME
export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
  comments: COMMENTS
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const PrimaryOrangeLoading = Template.bind({});
PrimaryOrangeLoading.args = {
  comments: COMMENTS,
  loading: true
};
PrimaryOrangeLoading.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
