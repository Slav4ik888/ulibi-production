import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Skeleton } from '.';


export default {
  title     : 'shared/Skeleton',
  component : Skeleton,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Skeleton>;


const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  width        : '100%',
  height       : 200
};

export const Circle = Template.bind({});
Circle.args = {
  borderRadius : '50%',
  width        : 100,
  height       : 100
};

// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width        : '100%',
  height       : 200
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  borderRadius : '50%',
  width        : 100,
  height       : 100
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

// GREEN THEME
export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
  width        : '100%',
  height       : 200
};
PrimaryGreen.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];

export const CircleGreen = Template.bind({});
CircleGreen.args = {
  borderRadius : '50%',
  width        : 100,
  height       : 100
};
CircleGreen.decorators = [ThemeDecorator(Theme.ORANGE_DARK)];
