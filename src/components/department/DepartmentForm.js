import React from "react";
import {Field} from "redux-form";
import {PageHeader, Form} from "react-bootstrap";

import FormField from '../forms/FormField';
import FormSubmit from '../forms/FormSubmit';

const DepartmentForm = props => {
  const {department = {}, departmentFormSubmit, formActionType} = props;
  const {error, invalid, submitting} = props;

  return (
    <div>
      <PageHeader>
        {'Department ' + (formActionType === 'EDIT' ? 'edit' : 'add')}
      </PageHeader>

      <Form horizontal onSubmit={departmentFormSubmit}>
        <Field component={FormField}
               error={error}
               value={department.name}
               name="department_name"
               label="Name"/>

        <FormSubmit invalid={invalid} submitting={submitting}/>
      </Form>
    </div>
  );
};

export default DepartmentForm;
