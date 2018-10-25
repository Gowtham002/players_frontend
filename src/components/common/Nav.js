import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Nav = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

export default Nav;