import React from "react";
import {PageHeader, Button} from 'react-bootstrap';
import {Link} from 'react-router';

import EmployeesTable from "./EmployeesTable";
import RemoveConfirm from "../common/RemoveConfirm";

export default class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeDialogIsShowing: false,
      removedEmployee: null
    };

    this.showRemoveDialog = this.showRemoveDialog.bind(this);
    this.hideRemoveDialog = this.hideRemoveDialog.bind(this);
    this.removeEmployee = this.removeEmployee.bind(this);
  }

  componentWillMount() {
    this.props.fetchEmployees();
  }

  showRemoveDialog(employee) {
    this.setState({
      removeDialogIsShowing: true,
      removedEmployee: employee
    });
  }

  hideRemoveDialog() {
    this.setState({
      removeDialogIsShowing: false,
      removedEmployee: null
    });
  }

  removeEmployee() {
    this.props.removeEmployee(this.state.removedEmployee.id);
    this.hideRemoveDialog();
  }

  render() {
    const {employees} = this.props;

    return (
      <div>
        <PageHeader>Employee</PageHeader>

        <Link to="/employee/add">
          <Button>
            Add Employee
          </Button>
        </Link>

        <EmployeesTable showRemoveDialog={this.showRemoveDialog}
                        employees={employees}
                        className="spaced-top"/>

        {this.state.removedEmployee &&
          <RemoveConfirm show={this.state.removeDialogIsShowing}
                         removedName={this.state.removedEmployee.firstName}
                         hideRemoveDialog={this.hideRemoveDialog}
                         makeRemove={this.removeEmployee}/>}
      </div>
    );
  }
}
