import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { ValidateProfileError } from 'entities/profile/model/types';
import { State } from '../../../../app/providers/store';


type ActionCreator<Return, Arg, RejectedValue> = (arg: Arg) =>
  AsyncThunkAction<Return, Arg, { rejectValue: string | ValidateProfileError }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, { shallow: true });


export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch      : jest.MockedFn<any>;
  api           : jest.MockedFn<AxiosStatic>;
  navigate      : jest.MockedFn<any>;
  getState      : () => State;
  actionCreator : ActionCreator<Return, Arg, RejectedValue>;


  constructor(
    actionCreator : ActionCreator<Return, Arg, RejectedValue>,
    state?        : DeepPartial<State>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as State || {} as State);
    this.api      = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const
      action = this.actionCreator(arg),
      result = await action(
        this.dispatch,
        this.getState,
        { api: this.api, navigate: this.navigate }
      );

    return result;
  }
}
