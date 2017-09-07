import React from "react";
import {connect} from "react-redux";
import values from 'lodash/values';

import Employee from './Employee';

function mapStateToProps(state) {
  return {
    employees: values(state.employees)
  };
}

function mapDispatchToProps(dispath) {
  return {
    fetchEmployees: _ => dispath({
      type: 'EMPLOYEE_FETCH_REQUEST'
    }),
    removeEmployee: id => dispath({
      type: 'EMPLOYEE_REMOVE_REQUEST',
      employeeId: id
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
