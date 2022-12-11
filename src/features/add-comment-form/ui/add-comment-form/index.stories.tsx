import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StateSchema } from 'app/providers/store';
import { Theme } from 'app/providers/theme';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import AddCommentForm from '.';
import { action } from '@storybook/addon-actions';


export default {
  title     : 'features/AddCommentForm',
  component : AddCommentForm,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AddCommentForm>;


const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

const
  comment = 'Slava write this comment now',

  state: DeepPartial<StateSchema> = {
    addCommentForm: {
      comment
    }
  },
  stateWithError: DeepPartial<StateSchema> = {
    addCommentForm: {
      comment,
      error   : 'Wrong comment'
    }
  };


// LIGHT THEME
export const Primary = Template.bind({});
Primary.args = {
  onSendComment: action('onSendComment')
};
Primary.decorators = [StoreDecorator(state)];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.decorators = [StoreDecorator(stateWithError)];


// DARK THEME
export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];

export const PrimaryDarkWithError = Template.bind({});
PrimaryDarkWithError.decorators = [StoreDecorator(stateWithError), ThemeDecorator(Theme.DARK)];

// DARK THEME
export const PrimaryOrange = Template.bind({});
PrimaryOrange.decorators = [StoreDecorator(state), ThemeDecorator(Theme.ORANGE_DARK)];

export const PrimaryOrangeWithError = Template.bind({});
PrimaryOrangeWithError.decorators = [StoreDecorator(stateWithError), ThemeDecorator(Theme.ORANGE_DARK)];
