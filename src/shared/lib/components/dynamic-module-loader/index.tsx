import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/store';
import { StateKey } from 'app/providers/store/config/state';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';



export type ReducersList = {
  [name in StateKey]?: Reducer
}

type ReducerStringEntry = [StateKey, Reducer]


interface Props {
  reducers               : ReducersList
  notRemoveAfterUnmount? : boolean
}

export const DynamicModuleLoader: FC<Props> = ({ children, notRemoveAfterUnmount, reducers }) => {
  const
    store    = useStore() as ReduxStoreWithManager,
    dispatch = useDispatch();


  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducerStringEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (!notRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([key, reducer]: ReducerStringEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {children}
    </>
  )
};
