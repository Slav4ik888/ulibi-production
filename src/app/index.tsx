import { Suspense, FC } from 'react';
import { AppRouter } from './providers/router';
// Components
import { Navbar } from 'widgets/navbar';
import { SideBar } from 'widgets/side-bar';



export const App: FC = () => (
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
