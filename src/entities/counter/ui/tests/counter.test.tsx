import { screen } from '@testing-library/react';
import { componentRender } from '../../../../../config/tests';
import { Counter } from '..';
import { userEvent } from '@storybook/testing-library';


describe('<Counter />', () => {
  const state = {
    initialState: { counter: { value: 100 } }
  };

  test('Default render', () => {
    componentRender(<Counter />, state);

    // screen.debug();
    expect(screen.getByTestId('value-title')).toHaveTextContent('100');
  });

  test('Increment', () => {
    componentRender(<Counter />, state);

    userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('101');
  });

  test('Decrement', () => {
    componentRender(<Counter />, state);

    userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('99');
  });
});

// npm run test:unit counter.test.tsx
