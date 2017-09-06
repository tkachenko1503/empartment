import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

import EmployeeForm from './EmployeeForm';

function mapStateToProps(state, own_props) {
  return {
    formActionType: 'ADD'
  };
}

const WrappedForm = reduxForm({
  form: 'add_employee'
})(EmployeeForm);

export default connect(mapStateToProps)(WrappedForm);
