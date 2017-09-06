import React from "react";
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Sidebar extends React.Component {
  render() {
    return (
      <Nav className="nav-sidebar">
        <LinkContainer to="/">
          <NavItem>Department</NavItem>
        </LinkContainer>

        <LinkContainer to="/employee">
          <NavItem>Employee</NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
