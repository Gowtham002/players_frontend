import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

class BreadCrumb extends Component {

  getPaths() {
    let { pathname } = this.props;
    let tempPaths = pathname.split("/");
    let filteredPaths = tempPaths.filter(path => path.length > 0);
    return filteredPaths;
  }

  render() {
    let paths = this.getPaths();
    return (
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/" active={paths.length < 1}>Home</Breadcrumb.Item>
          { 
            paths.map((path, index) => {
              return <Breadcrumb.Item href={`/${path}`} key={index} active={index === paths.length-1}>
                {path.charAt(0).toUpperCase()}{path.slice(1)}
              </Breadcrumb.Item>
            })
          }
        </Breadcrumb>
      </div>
    )
  }
}

export default BreadCrumb;