import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Card } from '.';
import { Text } from '..';


export default {
  title     : 'shared/Card',
  component : Card,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Card>;


const
  Template: ComponentStory<typeof Card> = (args) => <Card {...args} />,
  children = <Text title='Title text' text='Some nuh text' />;

// LIGHT THEME
export const CardSimple = Template.bind({});
CardSimple.args = {
  children
};

// DARK THEME
export const CardSimpleDark = Template.bind({});
CardSimpleDark.args = {
  children
};
CardSimpleDark.decorators = [ThemeDecorator(Theme.DARK)];
