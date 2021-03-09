import {
    CREATE_REGISTER,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
  } from './types'

export const createAnswers = answers => ({
    type: CREATE_REGISTER,
    payload: answers
});

export const getUserDoc = userData => ({
    type: USER_LOADED,
    payload: userData
});

/* export const authError = authData => ({
    type: AUTH_ERROR,
    payload: authData
}); */


// Logout
export const logoutUser = () => ({ type: LOGOUT });
