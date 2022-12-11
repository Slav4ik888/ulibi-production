import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateSchema } from 'app/providers/store';
import { Theme } from 'app/providers/theme';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { PROFILE } from 'shared/lib/tests/__mocks__';
import ProfilePage from '.';


export default {
  title     : 'pages/ProfilePage',
  component : ProfilePage,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const store: DeepPartial<StateSchema> = {
  profile: {
    form: PROFILE
  }
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(store)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(store)];
