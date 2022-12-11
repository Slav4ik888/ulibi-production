import { StateSchema } from 'app/providers/store';
import { selectCounterValue } from '..';


describe('selectCounterValue', () => {
  test('Return state counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };

    expect(selectCounterValue(state as StateSchema)).toEqual(10);
  })
});

// npm run test:unit select-counter-value.test.ts
