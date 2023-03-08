import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook';
import { Select, SelectProps } from '.';



export default {
  title     : 'shared/Select',
  component : Select,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>;


const
  Template: ComponentStory<typeof Select> = (args) => <Select {...args} />,
  defaultProps: SelectProps<string> = {
    label   : 'Select value',
    value   : '125',
    options : [
      { value: '123', content: 'Пункт 1' },
      { value: '124', content: 'Пункт 2' },
      { value: '125', content: 'Пункт 3' },
      { value: '126', content: 'Пункт 4' },
      { value: '127', content: 'Пункт 5' }
    ],
    onChange: () => {}
  };


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps
};


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  ...defaultProps
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
