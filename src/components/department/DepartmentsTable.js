import React from "react";
import {Table} from 'react-bootstrap';
import {Link} from 'react-router';

const DepartmentsTable = props => {
  return (
    <div>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Facebook</td>
            <td>
              <Link to="/department/1/edit">
                edit
              </Link>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Microsoft</td>
            <td>
              <Link to="/department/2/edit">
                edit
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DepartmentsTable;
