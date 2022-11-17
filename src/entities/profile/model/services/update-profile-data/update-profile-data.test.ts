import { TestAsyncThunk } from 'shared/lib/tests';
import { updateProfileData } from '..';
import { PROFILE } from 'shared/lib/tests/__mocks__';
import { ValidateProfileError } from '../../types';



describe('updateProfileData', () => {
  test('Succes update', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: PROFILE
      }
    });
    // @ts-ignore
    thunk.api.put.mockReturnValue(Promise.resolve({ data: PROFILE }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(PROFILE);
  });


  test('Server error', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: PROFILE
      }
    });
    // @ts-ignore
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('Error in validate', async () => {
    // @ts-ignore
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...PROFILE,
          age: 0
        }
      }
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INVALID_AGE]);
  });
});


// npm run test:unit update-profile-data.test.ts
