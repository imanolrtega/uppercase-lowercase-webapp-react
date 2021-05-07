import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode/useDarkMode";
import { GlobalStyles } from "./components/DarkMode/Globalstyle";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";

const Main = lazy(() => import("./components/Home/Main"));
const ExtraInfo = lazy(() => import("./components/Home/ExtraInfo"));
const NavbarMyM = lazy(() => import("./components/Home/NavbarMyM"));
const Toggle = lazy(() => import("./components/DarkMode/Toggler"));
const FormMyM = lazy(() => import("./components/Form/FormMyM"));
const Footer = lazy(() => import("./components/Home/Footer"));
const ScrollTop = lazy(() => import("./components/ScrollTop/ScrollTop"));

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
          <Suspense
            fallback={
              <div className="d-flex justify-content-center pt-4">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
              </div>
            }>
            <NavbarMyM />
          </Suspense>
          <div className="div-float">
            <Suspense
              fallback={
                <div className="d-flex justify-content-center pt-4">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                </div>
              }>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </Suspense>
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

          <div className="container mb-3">
            <Suspense
              fallback={
                <div className="d-flex justify-content-center pt-4">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                </div>
              }>
              <ExtraInfo />
            </Suspense>
          </div>

          <div>
            <Suspense
              fallback={
                <div className="d-flex justify-content-center pt-4">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                </div>
              }>
              <ScrollTop />
            </Suspense>
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
