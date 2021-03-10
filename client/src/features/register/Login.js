import React from 'react';
import { connect } from 'react-redux';
import { login } from './redux/actions/actions';
import Login from '../../components/login/Login';

const LoginDisplay = (props) => {
  console.log('Questionaire props:', props);
  return <Login {...props} />;
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (formData) => dispatch(login(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDisplay);
