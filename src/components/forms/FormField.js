import React from "react";
import {FormGroup, FormControl, ControlLabel, Col} from "react-bootstrap";

const FormField = props => {
  const {name, label, error, value} = props;
  const state = error ? "error" : null;

  return (
    <FormGroup controlId={name} validationState={state}>
      <Col sm={2} componentClass={ControlLabel}>
        {label}
      </Col>

      <Col sm={10}>
        <FormControl type="text" value={value}/>
      </Col>
    </FormGroup>
  );
};

export default FormField;
