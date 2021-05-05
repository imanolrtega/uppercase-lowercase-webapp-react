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
        <a className="navbar-brand nav-dark" href="#">
          <img className="logo" src="logo-minusculas-mayusculas-1.png"></img>
        </a>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarMyM;
