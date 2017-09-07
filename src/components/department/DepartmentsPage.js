import React from "react";
import {connect} from "react-redux";
import values from 'lodash/values';

import Department from './Department';

function mapStateToProps(state) {
  return {
    departments: values(state.departments)
  };
}

function mapDispatchToProps(dispath) {
  return {
    fetchDepartments: _ => dispath({
      type: 'DEPARTMENT_FETCH_REQUEST'
    }),
    removeDepartment: id => dispath({
      type: 'DEPARTMENT_REMOVE_REQUEST',
      departmentId: id
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);
