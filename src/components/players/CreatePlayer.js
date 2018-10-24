import React, { Component, Fragment } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { savePlayer } from "ACTIONS/player";
import PlayerForm from "./PlayerForm";

class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false
    }
  }

  onSubmit = (values) => {
    this.props.savePlayer(values);
  }

  componentDidUpdate() {
    if(this.props.saveSuccess) {
      this.props.history.push("/players");
    }
  }

  render() {
    let { loading, hasSaveError } = this.props;
    return (
      <Fragment>
        { hasSaveError ? <Alert bsStyle="danger">Something went wrong! Please try again later.</Alert> : null }
        <PlayerForm onSubmit={this.onSubmit} isSubmitting={loading}/>
      </Fragment>
    )
  }
}

const mapStateToProps = ({players}) => ({
  hasSaveError: players.hasSaveError,
  loading: players.loading,
  saveSuccess: players.saveSuccess
})

const mapDispatchToProps = dispatch => ({
  savePlayer: (player) => dispatch(savePlayer(player)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayer);