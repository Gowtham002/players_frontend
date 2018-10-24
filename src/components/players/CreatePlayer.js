import React, { Component } from "react";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import PlayerForm from "./PlayerForm";

class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false
    }
  }

  onSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <PlayerForm onSubmit={this.onSubmit} isSubmitting={false}/>
    )
  }
}

export default CreatePlayer;