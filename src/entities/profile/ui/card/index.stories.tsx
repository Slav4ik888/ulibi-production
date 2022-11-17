import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { PROFILE } from 'shared/lib/tests/__mocks__';
import { ProfileCard } from '.';


export default {
  title     : 'entities/ProfileCard',
  component : ProfileCard,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

// LIGHT
export const Primary = Template.bind({});
Primary.args = {
  profile: PROFILE
};
Primary.decorators = [StoreDecorator({})];

export const Error = Template.bind({});
Error.args = {
  profile : PROFILE,
  error   : 'Some error'
};
Error.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  profile : PROFILE,
  loading : true
};
Loading.decorators = [StoreDecorator({})];


// DARK
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  profile: PROFILE
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  profile : PROFILE,
  error   : 'Some error'
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  profile : PROFILE,
  loading : true
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
