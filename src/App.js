import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode/useDarkMode";
import { GlobalStyles } from "./components/DarkMode/Globalstyle";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";
import Toggle from "./components/DarkMode/Toggler";

import NavbarMyM from "./components/Home/NavbarMyM";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const Main = lazy(() => import("./components/Home/Main"));
const FormMyM = lazy(() => import("./components/Form/FormMyM"));
const Footer = lazy(() => import("./components/Home/Footer"));

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="container-fluid">
          <NavbarMyM />
          <div className="div-float">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="blank-container"></div>

          <Suspense
            fallback={
              <div className="d-flex justify-content-center pt-4">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
              </div>
            }>
            <Main />
          </Suspense>

          <div className="container mb-3">
            <Suspense
              fallback={
                <div className="d-flex justify-content-center pt-4">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                </div>
              }>
              <FormMyM />
            </Suspense>
          </div>

          <div>
            <ScrollTop />
          </div>

          <div className="blank-container" id="footer"></div>
          <Suspense
            fallback={
              <div className="d-flex justify-content-center pt-4">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
              </div>
            }>
            <Footer />
          </Suspense>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
