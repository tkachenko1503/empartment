import React from "react";
import {PageHeader} from 'react-bootstrap';

import DepartmentsTable from "./DepartmentsTable";

export default class Department extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Departments</PageHeader>

        <h3>List of Departments.</h3>
        <DepartmentsTable/>
      </div>
    );
  }
}
