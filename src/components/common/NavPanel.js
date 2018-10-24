import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { PANEL_ITEMS } from "./constants";

class NavPanel extends Component {
  render() {
    return (
      <Panel>
        <Panel.Heading>Manage</Panel.Heading>
        {
          PANEL_ITEMS.map((panelItem, index) => {
            return (
              <Fragment key={index}>
                <Panel.Body>{panelItem.title}</Panel.Body>
                <ListGroup>
                  {
                    panelItem.items.map((item, cindex) => {
                      return(
                        <Fragment key={cindex}>
                          <ListGroupItem>
                            <Link to={item.link}>{item.title}</Link>
                          </ListGroupItem>
                        </Fragment>
                      )
                    })
                  }
                </ListGroup>
              </Fragment>
            )
          })
        }
      </Panel>
    )
  }
}

export default NavPanel;