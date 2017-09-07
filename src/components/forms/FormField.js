import React from "react";
import {FormGroup, FormControl, ControlLabel, Col} from "react-bootstrap";

const FormField = props => {
  const {input, name, label, error} = props;
  const state = error ? "error" : null;

  return (
    <FormGroup controlId={name} validationState={state}>
      <Col sm={2} componentClass={ControlLabel}>
        {label}
      </Col>

      <Col sm={10}>
        <FormControl {...input} type="text"/>
      </Col>
    </FormGroup>
  );
};

export default FormField;
