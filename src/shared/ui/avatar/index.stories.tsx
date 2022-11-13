import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Avatar, Props } from '.';
import AvatarImg from './avatar.png';


export default {
  title     : 'shared/Avatar',
  component : Avatar,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>;


const
  Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />,
  defaultProps: Props = {
    alt  : 'Avatar nuh',
    size : 150,
    src  : AvatarImg
  };


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps
};

export const Small = Template.bind({});
Small.args = {
  ...defaultProps,
  size: 50
};


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  ...defaultProps
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallDark = Template.bind({});
SmallDark.args = {
  ...defaultProps,
  size: 50
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];
