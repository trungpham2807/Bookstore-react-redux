import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import githubIco from "../images/github_icon.png";
import { NavLink } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="CoderSchool" width="200px" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/reading">
          Reading List
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={NavLink} to="/cart">
          <img src={githubIco} alt="Github" width="32px" />
      </Nav.Link>      
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
