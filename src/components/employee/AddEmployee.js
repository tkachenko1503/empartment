import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

import EmployeeForm from './EmployeeForm';

function mapStateToProps(state, ownProps) {
  return {
    formActionType: 'ADD'
  };
}

function mapDispatchToProps(dispath, ownProps) {
  return {
    makeRequest: employee => dispath({
      type: 'EMPLOYEE_ADD_REQUEST',
      employee
    })
  };
}

const WrappedForm = reduxForm({
  form: 'add_employee'
})(EmployeeForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedForm);
