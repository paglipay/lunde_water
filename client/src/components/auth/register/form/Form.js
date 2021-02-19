import React, { Component } from 'react';
import { Label, Input } from 'semantic-ui-react';

const Form = () => {
  return (
    <div>
      <div className='field'>
        <label>Email</label>
        <Input type='text' placeholder='Email'/>
        <div className='field'>
          <label>Username</label>
          <Input type='text' placeholder='Username'/>
          <div className='field'>
            <label>Password</label>
            <Input type='text' placeholder='Password'/>
          </div>
          <div className='field'>
            <label>Repeat Password</label>
            <Input type='text' placeholder='Repeat Password'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
