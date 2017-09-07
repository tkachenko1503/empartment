import React from "react";
import {Field} from "redux-form";
import {PageHeader, Form} from "react-bootstrap";

import FormField from '../forms/FormField';
import FormSubmit from '../forms/FormSubmit';

const EmployeeForm = props => {
  const {handleSubmit, makeRequest, formActionType} = props;
  const {error, invalid, submitting} = props;

  return (
    <div>
      <PageHeader>
        {'Employee ' + (formActionType === 'EDIT' ? 'edit' : 'add')}
      </PageHeader>

      <Form horizontal onSubmit={handleSubmit(makeRequest)}>
        <Field component={FormField}
               error={error}
               name="firstName"
               label="First Name"/>

        <Field component={FormField}
               error={error}
               name="lastName"
               label="Last Name"/>

        <Field component={FormField}
               error={error}
               name="departmentId"
               label="Department Id"/>

        <FormSubmit invalid={invalid} submitting={submitting}/>
      </Form>
    </div>
  );
};

export default EmployeeForm;
