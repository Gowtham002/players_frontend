import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Nav = function (props) {
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