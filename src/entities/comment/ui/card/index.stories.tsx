import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { CommentCard } from '.';
import { COMMENT_ONE } from 'shared/lib/tests/__mocks__';


export default {
  title     : 'entities/CommentCard',
  component : CommentCard,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>;


const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  comment: COMMENT_ONE
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  comment: COMMENT_ONE,
  loading: true
};


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  comment: COMMENT_ONE
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkLoading = Template.bind({});
PrimaryDarkLoading.args = {
  comment: COMMENT_ONE,
  loading: true
};
PrimaryDarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

// DARK THEME
export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
  comment: COMMENT_ONE
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const PrimaryOrangeLoading = Template.bind({});
PrimaryOrangeLoading.args = {
  comment: COMMENT_ONE,
  loading: true
};
PrimaryOrangeLoading.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
