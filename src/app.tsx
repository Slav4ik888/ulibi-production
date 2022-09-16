import { Suspense, useContext, useReducer, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/about/index.async";
import { MainPageAsync } from "./pages/main/index.async";
import { RoutePath } from "./utils/routes";
import './styles/index.scss';
import { ThemeContext } from "./theme/context";
import { useTheme } from "./theme/use-theme";
import { classNames } from "./utils/class-names";



export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(`app`, {}, [theme])}>
      <Link to={RoutePath.MAIN}>Главная</Link>
      <Link to={RoutePath.ABOUT}>О сайте</Link>
      <button onClick={toggleTheme}>{theme}</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutePath.ROOT}>
            <Route path={RoutePath.MAIN}  element={<MainPageAsync />} />
            <Route path={RoutePath.ABOUT} element={<AboutPageAsync />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
};

