import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";

import DepartmentForm from './DepartmentForm';

function mapStateToProps(state, own_props) {
  return {
    formActionType: 'EDIT'
  };
}

const WrappedForm = reduxForm({
  form: 'edit_departmant'
})(DepartmentForm);

export default connect(mapStateToProps)(WrappedForm);
