import React from 'react';
import { connect } from 'react-redux';
import { register } from './redux/actions/actions';
import Register from '../../components/register/Register';

const RegisterDisplay = (props) => {
  console.log('Questionaire props:', props);
  return <Register {...props} />;
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (formData) => dispatch(register(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDisplay);
