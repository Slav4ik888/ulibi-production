import { Suspense, FC } from 'react';
import { AppRouter } from './providers/router';
// Components
import { Navbar } from 'widgets/navbar';
import { SideBar } from 'widgets/side-bar';
// Functions
import { useTheme } from './providers/theme';
import { cn } from 'shared/lib';
import './styles/index.scss';



export const App: FC = () => {
  const { theme } = useTheme();


  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
};
