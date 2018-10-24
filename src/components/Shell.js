import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Row, Col} from "react-bootstrap";
import Nav from "./common/Nav";
import BreadCrumb from "./common/BreadCrumb";
import NavPanel from "./common/NavPanel";
import routes from "./routes";

class Shell extends Component {
  render() {
    let { location } = this.props;
    return (
      <div className="shell-wrapper">
        <Nav/>
        <div className="main-container">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2}>
                <NavPanel/>
              </Col>
              <Col xs={12} md={10}>
                <BreadCrumb pathname={location.pathname}/>
                <div className="content-wrapper">
                  {routes}
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(Shell);
