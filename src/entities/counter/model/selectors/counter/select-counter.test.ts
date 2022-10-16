import { DeepPartial } from '@reduxjs/toolkit';
import { State } from 'app/providers/store';
import { selectCounter } from '..';


describe('selectCounter', () => {
  test('Return state counter', () => {
    const state: DeepPartial<State> = {
      counter: { value: 10 }
    };

    expect(selectCounter(state as State)).toEqual({ value: 10 });
  })
});

// npm run test:unit select-counter.test.ts
