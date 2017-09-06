import React from "react";
import {PageHeader, Button} from 'react-bootstrap';
import {Link} from 'react-router';

import DepartmentsTable from "./DepartmentsTable";
import RemoveConfirm from "../common/RemoveConfirm";

const mockDepartments = [
  {id: 1, name: 'Facebook'},
  {id: 2, name: 'Microsoft'},
];

export default class Department extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeDialogIsShowing: false,
      removedDepartment: null
    };

    this.showRemoveDialog = this.showRemoveDialog.bind(this);
    this.hideRemoveDialog = this.hideRemoveDialog.bind(this);
    this.removeDepartment = this.removeDepartment.bind(this);
  }

  showRemoveDialog(department) {
    this.setState({
      removeDialogIsShowing: true,
      removedDepartment: department
    });
  }

  hideRemoveDialog() {
    this.setState({
      removeDialogIsShowing: false,
      removedDepartment: null
    });
  }

  removeDepartment() {
    this.props.dispatch({
      type: '',
      departmentId: this.state.removedDepartment.id
    });

    this.hideRemoveDialog();
  }

  render() {
    return (
      <div>
        <PageHeader>Departments</PageHeader>

        <Link to="/department/add">
          <Button>
            Add Department
          </Button>
        </Link>

        <DepartmentsTable showRemoveDialog={this.showRemoveDialog}
                          departments={mockDepartments}
                          className="spaced-top"/>

        {this.state.removedDepartment &&
          <RemoveConfirm show={this.state.removeDialogIsShowing}
                         removedName={this.state.removedDepartment.name}
                         hideRemoveDialog={this.hideRemoveDialog}
                         makeRemove={this.removeDepartment}/>}
      </div>
    );
  }
}
