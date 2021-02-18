import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Modal } from 'semantic-ui-react';

const Dialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Sign Up</Button>}
    >
      <Modal.Header>Sign Up</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Register with Lunde Water</Header>
          <p>Form</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Dialog;
