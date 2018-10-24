import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { fetchPlayers } from "./../../redux/actions/player";
import LoadingScreen from 'react-loading-screen';

const tableHeaders = ["#", "Name", "Actions"]

class PlayersHome extends Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    let { players, fetching, hasError } = this.props;
    return (
      <LoadingScreen
        loading={fetching}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        text='Loading player list'
      > 
        <Table striped bordered hover>
          <thead>
            <tr>
              {
                tableHeaders.map((header, index) => {
                  return <th key={index}>{header}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              players.length > 0 ?
                players.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{player.name}</td>
                      <td>Delete</td>
                    </tr>
                  )
                })
              : <tr><td colSpan="2">No data found</td></tr>
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
  fetchPlayers: () => dispatch(fetchPlayers()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayersHome);