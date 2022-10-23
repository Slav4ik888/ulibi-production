import { Suspense, FC, useEffect } from 'react';
import { AppRouter } from './providers/router';
// Components
import { Navbar } from 'widgets/navbar';
import { SideBar } from 'widgets/side-bar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/user/model';



export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);


  return (
    <div className='app'>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
