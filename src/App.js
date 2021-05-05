import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./components/Home/Main";
import NavbarMyM from "./components/Home/NavbarMyM";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Footer from "./components/Home/Footer";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/DarkMode/useDarkMode";
import { GlobalStyles } from "./components/DarkMode/Globalstyle";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";
import Toggle from "./components/DarkMode/Toggler";

import FormMyM from "./components/Form/FormMyM";

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
          <Main />

          <div className="container mb-3">
            <FormMyM />
          </div>

          <div>
            <ScrollTop />
          </div>

          <div className="blank-container" id="footer"></div>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
