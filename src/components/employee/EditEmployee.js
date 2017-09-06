import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

import EmployeeForm from './EmployeeForm';

function mapStateToProps(state, own_props) {
  return {
    formActionType: 'EDIT'
  };
}

const WrappedForm = reduxForm({
  form: 'edit_employee'
})(EmployeeForm);

export default connect(mapStateToProps)(WrappedForm);
