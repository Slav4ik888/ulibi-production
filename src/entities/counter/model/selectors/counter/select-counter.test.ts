import { StateSchema } from 'app/providers/store';
import { selectCounter } from '..';


describe('selectCounter', () => {
  test('Return state counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };

    expect(selectCounter(state as StateSchema)).toEqual({ value: 10 });
  })
});

// npm run test:unit select-counter.test.ts
