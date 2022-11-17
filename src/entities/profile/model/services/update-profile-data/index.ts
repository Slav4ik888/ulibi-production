import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { validateProfileData } from '..';
import { selectProfileForm } from '../../selectors';
import { Profile, ValidateProfileError } from '../../types';



export const updateProfileData = createAsyncThunk<
  Profile,                            // то, что возвращает
  void,                               // то, что принимает
  ThunkConfig<ValidateProfileError[]> // то, что отвечает за ошибку
>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const
      { extra, rejectWithValue, getState } = thunkApi,
      formData = selectProfileForm(getState()),
      errors = validateProfileData(formData);

    if (errors.length) return rejectWithValue(errors)

    try {
      const { data } = await extra.api.put<Profile>('/profile', formData);
      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);
