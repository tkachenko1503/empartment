import React from "react";
import {Modal, Button} from "react-bootstrap";

const RemoveConfirm = props => {
  const {show, removedName, hideRemoveDialog, makeRemove} = props;

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>
          Are you sure you want to remove <strong>{removedName}</strong>?
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button onClick={hideRemoveDialog}>No</Button>

        <Button onClick={makeRemove} bsStyle="primary">Yes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveConfirm;
