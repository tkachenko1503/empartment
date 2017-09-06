import React from "react";
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import partial from 'lodash/partial';

const DepartmentRow = ({id, firstName, lastName, departmentName, remove}) => {
  return (
    <tr>
      <td className="verticaly-centered">{id}</td>
      <td className="verticaly-centered">{firstName}</td>
      <td className="verticaly-centered">{lastName}</td>
      <td className="verticaly-centered">{departmentName}</td>
      <td className="verticaly-centered">
        <Link to={`/employee/${id}/edit`}>
          <Button bsStyle="link">
            edit
          </Button>
        </Link>

        <Button onClick={remove} bsStyle="link">
          remove
        </Button>
      </td>
    </tr>
  );
};

const makeEmployeeRow =
  ({remove}) =>
    employee =>
      <DepartmentRow {...employee}
                     key={employee.id}
                     remove={partial(remove, employee)}/>;

const EmployeesTable = ({employees, showRemoveDialog, className}) => {
  const partials = {remove: showRemoveDialog};

  return (
    <div className={className}>
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department Name</th>
          <th>Actions</th>
        </tr>
        </thead>

        <tbody>
        {employees.map(makeEmployeeRow(partials))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeesTable;
