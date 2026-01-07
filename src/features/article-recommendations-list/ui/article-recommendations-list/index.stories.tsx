import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleRecommendationsList } from '.';
import { StoreDecorator } from 'shared/config/storybook';
import withMock from 'storybook-addon-mock';
import { MOCK_ARTICLE } from 'shared/lib/tests/__mocks__';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...MOCK_ARTICLE, id: '1' },
                { ...MOCK_ARTICLE, id: '2' },
                { ...MOCK_ARTICLE, id: '3' },
            ],
        },
    ],
};
