import './styles/index.scss';
import { useTheme } from "./providers/theme";
import { cn } from "shared/lib";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { SideBar } from 'widgets/sidebar';



export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn(`app`, {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <SideBar />
        <AppRouter />
      </div>
    </div>
  )
};

