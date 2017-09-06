import React from "react";
import {PageHeader} from 'react-bootstrap';

import EmployeesTable from "./EmployeesTable";

export default class Employee extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>Employee</PageHeader>

        <h3>List of Employees.</h3>
        <EmployeesTable/>
      </div>
    );
  }
}
