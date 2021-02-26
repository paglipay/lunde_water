import React, { useState } from 'react';
import Login from '../login/form/Login';
import { Button, Header, Modal } from 'semantic-ui-react';

const Dialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Login</Button>}
    >
      <Modal.Header>Lunde Water</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Login to your account</Header>
          <Login/>
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
