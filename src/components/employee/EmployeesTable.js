import React from "react";
import {Table} from 'react-bootstrap';
import {Link} from 'react-router';

const EmployeesTable = props => {
  return (
    <div>
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Zuckerberg</td>
          <td>Facebook</td>
          <td>
            <Link to="/employee/1/edit">
              edit
            </Link>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Bill</td>
          <td>Gates</td>
          <td>Microsoft</td>
          <td>
            <Link to="/employee/2/edit">
              edit
            </Link>
          </td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeesTable;
