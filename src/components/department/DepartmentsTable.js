import React from "react";
import {Table, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import partial from 'lodash/partial';

const DepartmentRow = ({id, name, remove}) => {
  return (
    <tr>
      <td className="verticaly-centered">
        {id}
      </td>
      <td className="verticaly-centered">
        {name}
      </td>
      <td className="verticaly-centered">
        <Link to={`/department/${id}/edit`}>
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

const makeDepartmentRow =
  ({remove}) =>
    department =>
      <DepartmentRow {...department}
                     key={department.id}
                     remove={partial(remove, department)}/>;

const DepartmentsTable = ({departments, showRemoveDialog, className}) => {
  const partials = {remove: showRemoveDialog};

  return (
    <div className={className}>
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>ID</th>
          <th>Department Name</th>
          <th>Actions</th>
        </tr>
        </thead>

        <tbody>
        {departments.map(makeDepartmentRow(partials))}
        </tbody>
      </Table>
    </div>
  );
};

export default DepartmentsTable;
