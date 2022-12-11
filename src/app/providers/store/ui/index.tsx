import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StateSchema } from '../config/state';
import { createReduxStore } from '../config/store';



interface Props {
  children?      : ReactNode
  initialState?  : DeepPartial<StateSchema>
  asyncReducers? : DeepPartial<ReducersMapObject<StateSchema>>
}


export const StoreProvider: FC<Props> = ({ initialState, children, asyncReducers }) => {
  const
    navigate = useNavigate(),
    store = createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
      navigate
    );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};
