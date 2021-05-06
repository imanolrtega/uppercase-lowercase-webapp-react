import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarMyM = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar-expand-md fixed-top nav-dark justify-content-center"
      variant="dark">
      <Navbar.Brand href="#home">
        <button className="navbar-brand nav-dark">
          <img
            className="logo"
            alt="logo-minuscula-mayuscula"
            src="logo-minusculas-mayusculas-1.png"></img>
        </button>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarMyM;
