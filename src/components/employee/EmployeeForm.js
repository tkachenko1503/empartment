import React from "react";
import {Field} from "redux-form";
import {PageHeader, Form} from "react-bootstrap";

import FormField from '../forms/FormField';
import FormSubmit from '../forms/FormSubmit';

const EmployeeForm = props => {
  const {employee = {}, departmentName, employeeFormSubmit, formActionType} = props;
  const {error, invalid, submitting} = props;

  return (
    <div>
      <PageHeader>
        {'Employee ' + (formActionType === 'EDIT' ? 'edit' : 'add')}
      </PageHeader>

      <Form horizontal onSubmit={employeeFormSubmit}>
        <Field component={FormField}
               error={error}
               value={employee.firstName}
               name="employee_first_name"
               label="First Name"/>

        <Field component={FormField}
               error={error}
               value={employee.lastName}
               name="employee_last_name"
               label="Last Name"/>

        <Field component={FormField}
               error={error}
               value={departmentName}
               name="department_name"
               label="Department Name"/>

        <FormSubmit invalid={invalid} submitting={submitting}/>
      </Form>
    </div>
  );
};

export default EmployeeForm;
