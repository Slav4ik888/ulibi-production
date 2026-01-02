import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, updateProfileData } from '../services';
import { ProfileSchema } from '../types';
import { Profile } from 'entities/profile';



const initialState: ProfileSchema = {
  data          : undefined,
  form          : undefined,
  readonly      : true,
  loading       : false,
  error         : undefined,
  validateError : []
};


export const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    updateProfile: (state, { payload }: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...payload
      }
    },
    cancelEdit: (state) => {
      state.readonly      = true;
      state.validateError = [];
      state.form          = state.data;
    }
  },
  extraReducers: builder => {
    builder
      // fetchProfileData
      .addCase(fetchProfileData.pending, (state) => {
        state.error   = '';
        state.loading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.data    = payload;
        state.form    = payload;
        state.error   = '';
        state.loading = false;
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.error   = payload;
        state.loading = false;
      })

      // updateProfileData
      .addCase(updateProfileData.pending, (state) => {
        state.error         = '';
        state.validateError = [];
        state.loading       = true;
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.data     = payload;
        state.form     = payload;
        state.error    = '';
        state.loading  = false;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.validateError = payload;
        state.loading  = false;
        state.readonly = true;
      })
  }
})

export const {
  actions: profileActions,
  reducer: profileReducer
} = slice;
