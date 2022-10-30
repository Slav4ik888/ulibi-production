import { DeepPartial } from '@reduxjs/toolkit';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { State } from 'app/providers/store';
import { Theme } from 'app/providers/theme';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import LoginForm from '.';


export default {
  title     : 'features/LoginForm',
  component : LoginForm,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>;


const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const
  state: DeepPartial<State> = {
    login: {
      username : 'Slava',
      password : '123'
    }
  },
  stateWithError: DeepPartial<State> = {
    login: {
      username : 'Slava',
      password : '321',
      error    : 'Wrong password'
    }
  },
  stateWithLoading: DeepPartial<State> = {
    login: {
      username : 'Slava',
      password : '321',
      loading  : true
    }
  };


// LIGHT THEME
export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator(state)];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.decorators = [StoreDecorator(stateWithError)];

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.decorators = [StoreDecorator(stateWithLoading)];


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];

export const PrimaryDarkWithError = Template.bind({});
PrimaryDarkWithError.decorators = [StoreDecorator(stateWithError), ThemeDecorator(Theme.DARK)];

export const PrimaryDarkWithLoading = Template.bind({});
PrimaryDarkWithLoading.decorators = [StoreDecorator(stateWithLoading), ThemeDecorator(Theme.DARK)];
