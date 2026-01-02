import { TestAsyncThunk } from 'shared/lib/tests';
import { fetchProfileData } from '..';
import { PROFILE } from 'shared/lib/tests/__mocks__';



describe('fetchProfileData', () => {
  test('Succes fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ data: PROFILE }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(PROFILE);
  });


  test('Error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});


// npm run test:unit fetch-profile-data.test.ts
