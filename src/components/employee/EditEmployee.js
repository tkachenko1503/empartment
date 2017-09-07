import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import get from 'lodash/get';

import EmployeeForm from './EmployeeForm';

class WillMountWrapper extends React.Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <EmployeeForm {...this.props}/>
    );
  }
}

function mapStateToProps(state, {routeParams}) {
  const {firstName, lastName, departmentId} = get(state, ['employees', routeParams.id]);

  return {
    formActionType: 'EDIT',
    initialValues: {
      firstName,
      lastName,
      departmentId
    }
  };
}

function mapDispatchToProps(dispath, {routeParams}) {
  return {
    fetchEmployees: _ => dispath({
      type: 'EMPLOYEE_FETCH_REQUEST'
    }),
    makeRequest: ({firstName, lastName, departmentId}) => dispath({
      type: 'EMPLOYEE_EDIT_REQUEST',
      employee: {
        id: routeParams.id,
        firstName,
        lastName,
        departmentId
      }
    })
  };
}

const WrappedForm = reduxForm({
  form: 'edit_employee'
})(WillMountWrapper);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedForm);

