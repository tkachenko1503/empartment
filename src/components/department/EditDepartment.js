import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import get from 'lodash/get';

import DepartmentForm from './DepartmentForm';

class WillMountWrapper extends React.Component {
  componentWillMount() {
    this.props.fetchDepartments();
  }

  render() {
    return (
      <DepartmentForm {...this.props}/>
    );
  }
}

function mapStateToProps(state, {routeParams}) {
  return {
    formActionType: 'EDIT',
    initialValues: {
      name: get(state, ['departments', routeParams.id, 'name'])
    }
  };
}

function mapDispatchToProps(dispath, {routeParams}) {
  return {
    fetchDepartments: _ => dispath({
      type: 'DEPARTMENT_FETCH_REQUEST'
    }),
    makeRequest: ({name}) => dispath({
      type: 'DEPARTMENT_EDIT_REQUEST',
      department: {
        id: routeParams.id,
        name
      }
    })
  };
}

const WrappedForm = reduxForm({
  form: 'edit_departmant'
})(WillMountWrapper);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedForm);
