import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { Currency } from 'entities/currency';
import { ThemeDecorator } from 'shared/config/storybook';
import { CurrencySelect, Props } from '.';



export default {
  title     : 'entities/CurrencySelect',
  component : CurrencySelect,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CurrencySelect>;


const
  Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />,
  defaultProps: Props = {
    readOnly : false,
    value    : Currency.RUB,
    onChange : () => {}
  };


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...defaultProps,
  readOnly: true
};


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  ...defaultProps
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkDisabled = Template.bind({});
PrimaryDarkDisabled.args = {
  ...defaultProps,
  readOnly: true
};
PrimaryDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];
