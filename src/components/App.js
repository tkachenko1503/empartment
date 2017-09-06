import React from "react";
import {Row, Col} from 'react-bootstrap';

import Sidebar from './common/Sidebar';
import "../stylesheets/main.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col sm={3} md={2}>
            <Sidebar/>
          </Col>

          <Col sm={9} md={10}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}
