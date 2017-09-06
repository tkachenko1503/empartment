import React from "react";
import {FormGroup, Col, Button} from "react-bootstrap";

const FormSubmit = props => {
  const {invalid, submitting} = props;

  return (
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit"
                bsStyle="primary"
                disabled={invalid || submitting}>
          {submitting ? 'Saving...' : 'Save Department'}
        </Button>
      </Col>
    </FormGroup>
  );
};

export default FormSubmit;
