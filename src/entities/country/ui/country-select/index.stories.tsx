import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { Country } from '../../model/types';
import { ThemeDecorator } from 'shared/config/storybook';
import { CountrySelect, CountryProps } from '.';



export default {
  title     : 'entities/CountrySelect',
  component : CountrySelect,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CountrySelect>;


const
  Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />,
  defaultProps: CountryProps = {
    readOnly : false,
    value    : Country.RUSSIA,
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
