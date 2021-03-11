import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.login(username, password);
  };

  if (props.isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <Fragment>
      {props.isAuthenticated ? (
        <h1 className='large text-primary'>You're already signed in</h1>
      ) : (
        <h1 className='large text-primary'>Sign In</h1>
      )}
      <p className='lead'>
        <i className='fas fa-user' /> Sign Into Your Account
      </p>
      <Form onSubmit={onSubmit}>

        <Form.Field>
          <input
            input
            placeholder='Username'
            name='username'
            value={username} 
            onChange={onChange}
            required
          />
        </Form.Field>

        <Form.Field>
          <input
            type='password' 
            input
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
}

export default Login;
