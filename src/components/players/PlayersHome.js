import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Alert, DropdownButton, MenuItem } from "react-bootstrap";
import TableHeader from "./../common/TableHeader";
import { fetchPlayers, deletePlayer } from "ACTIONS/player";
import LoadingScreen from 'react-loading-screen';

const tableHeaders = ["#", "Name", "Created At", "Actions"]

class PlayersHome extends Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  deletePlayer = (playerId) => {
    this.props.deletePlayer(playerId);
  }

  render() {
    let { players = [], loading, hasError } = this.props;
    return (
      <LoadingScreen
        loading={loading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        text='Loading player list'
      > 
      { hasError ? <Alert bsStyle="danger">Something went wrong! Please try again later.</Alert> : null }
        <Table striped bordered hover>
          <TableHeader headers={tableHeaders}/>
          <tbody>
            {
              players.length > 0 ?
                players.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{player.name}</td>
                      <td>{new Date(player.created_at).toLocaleDateString()}</td>
                      <td>
                        <DropdownButton id={index} bsStyle="danger" dropup title="Delete">
                          <MenuItem eventKey="1" onClick={() => this.deletePlayer(player._id)}>Confirm</MenuItem>
                        </DropdownButton>
                      </td>
                    </tr>
                  )
                })
              : <tr><td colSpan={tableHeaders.length}>No data found</td></tr>
            }
          </tbody>
        </Table>
      </LoadingScreen>
    )
  }
}

const mapStateToProps = ({players}) => ({
  ...players
})

const mapDispatchToProps = dispatch => ({
  fetchPlayers: () => dispatch(fetchPlayers()),
  deletePlayer: (playerId) => dispatch(deletePlayer(playerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayersHome);