import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateSchema } from 'app/providers/store';
import { Theme } from 'app/providers/theme';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { MOCK_ARTICLE } from 'shared/lib/tests/__mocks__';
import ArticlePageDetails from '.';


export default {
  title     : 'pages/ArticlePageDetails',
  component : ArticlePageDetails,
  argTypes  : {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlePageDetails>;

const Template: ComponentStory<typeof ArticlePageDetails> = () => <ArticlePageDetails />;
const store: Partial<StateSchema> = {
  article: {
    data    : MOCK_ARTICLE,
    error   : '',
    loading : false
  }
};


export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(store)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(store)];
