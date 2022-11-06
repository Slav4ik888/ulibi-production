import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../config/state';
import { createReduxStore } from '../config/store';



interface Props {
  children?      : ReactNode
  initialState?  : DeepPartial<State>
  asyncReducers? : DeepPartial<ReducersMapObject<State>>
}


export const StoreProvider: FC<Props> = ({ initialState, children, asyncReducers }) => {
  const
    navigate = useNavigate(),
    store = createReduxStore(
      initialState as State,
      asyncReducers as ReducersMapObject<State>,
      navigate
    );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};
