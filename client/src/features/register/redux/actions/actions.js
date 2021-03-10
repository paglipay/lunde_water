/* import {
    CREATE_REGISTER,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    CREATE_REGISTER_POST
  } from './types' */

/* export const createAnswers = answers => ({
    type: CREATE_REGISTER,
    payload: answers
});

export const createPost = answers => ({
    type: CREATE_REGISTER_POST,
    payload: answers
})

export const getUserDoc = userData => ({
    type: USER_LOADED,
    payload: userData
}); */

/* export const authError = authData => ({
    type: AUTH_ERROR,
    payload: authData
}); */

import api from '../../../../utils/api';
//import { setAlert } from './alert';
import {
  CREATE_REGISTER,
  CREATE_REGISTER_POST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const createAnswers = answers => ({
    type: CREATE_REGISTER,
    payload: answers
});

export const createPost = answers => ({
    type: CREATE_REGISTER_POST,
    payload: answers
})

export const addAnswersRequest = (text) => async (dispatch) => {
    //console.log('text: ', text);
    try {
      dispatch(createAnswers(text));
    } catch (err) {
      //dispatch(displayAlert())
    }
  };
  
// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
/*     dispatch({
      type: AUTH_ERROR
    }); */
  }
};

// Register User
export const register = formData => async dispatch => {
  try {
    const res = await api.post('/auth', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    //const errors = err.response.data.errors;

    //if (errors) {
    //  errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    //}

    dispatch({
      type: REGISTER_FAIL
    });
  };
};

// Login User
export const login = (email, password) => async dispatch => {
  const body = { email, password };

  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
     // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });

