import { DeepPartial } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { State } from '../config/state';
import { createReduxStore } from '../config/store';



interface Props {
  initialState?: DeepPartial<State>
}


export const StoreProvider: FC<Props> = ({ initialState, children }) => {
  const store = createReduxStore(initialState as State);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

StoreProvider.defaultProps = {
  initialState: null
};
