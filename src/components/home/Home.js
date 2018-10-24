import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Jumbotron>
          <h1>Welcome!</h1>
          <p>
            Navigate using sidebar menus :)
          </p>
        </Jumbotron>
      </div>
    )
  } 
}

export default Home;