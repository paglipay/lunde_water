import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, Button, Header, Modal } from 'semantic-ui-react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

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
          <div className='field' onSubmit={onSubmit}>
            <label>Email</label>
            <Input
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
            <div className='field'>
              <label>Password</label>
              <Input
                type='text'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onChange}
                required
              />
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button type='submit' className='green' value='login'>
          Login
        </Button>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
