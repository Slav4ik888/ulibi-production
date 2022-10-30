import { AsyncThunkAction } from '@reduxjs/toolkit';
import { State } from '../../../../app/providers/store';


type ActionCreator<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: string }>;


export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch      : jest.MockedFn<any>;
  getState      : () => State;
  actionCreator : ActionCreator<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const
      action = this.actionCreator(arg),
      result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
