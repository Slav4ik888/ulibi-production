import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectCounterValue } from '..';


describe('selectCounterValue', () => {
  test('Return state counter value', () => {
    const state: DeepPartial<State> = {
      counter: { value: 10 }
    };

    expect(selectCounterValue(state as State)).toEqual(10);
  })
});

// npm run test:unit select-counter-value.test.ts
