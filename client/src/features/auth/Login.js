import React from 'react';
import { connect } from 'react-redux';
import { login } from './redux/actions/auth';
import Login from '../../components/login/Login';

const LoginDisplay = (props) => {
  return <Login {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDisplay);
