import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

import DepartmentForm from './DepartmentForm';

function mapStateToProps(state, ownProps) {
  return {
    formActionType: 'ADD'
  };
}

function mapDispatchToProps(dispath, ownProps) {
  return {
    makeRequest: department => dispath({
      type: 'DEPARTMENT_ADD_REQUEST',
      department
    })
  };
}

const WrappedForm = reduxForm({
  form: 'add_departmant'
})(DepartmentForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedForm);
