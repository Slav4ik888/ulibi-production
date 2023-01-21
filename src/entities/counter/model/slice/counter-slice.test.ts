import { decrement, increment } from '.';
import { counterReducer, CounterSchema } from '..';


describe('counterSlice', () => {
  test('Empty state', () => {
    const state = undefined as unknown as CounterSchema;
    expect(counterReducer(state, increment)).toEqual({ value: 1 });
  });

  test('increment', () => {
    const state: CounterSchema = { value: 12 };
    expect(counterReducer(state, increment)).toEqual({ value: 13 });
  });

  test('decrement', () => {
    const state: CounterSchema = { value: 12 };
    expect(counterReducer(state, decrement)).toEqual({ value: 11 });
  });
});

// npm run test:unit counter-slice.test.ts
