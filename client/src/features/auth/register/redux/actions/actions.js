import {
    CREATE_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT
  } from './types'

export const createAnswers = answers => ({
    type: CREATE_REGISTER,
    payload: answers
});

export const registerUser = answers => ({
    type: REGISTER_SUCCESS, 
    payload: answers
});

export const getUserDoc = userData => ({
    type: USER_LOADED,
    payload: userData
});

export const loginUser = loginData => ({
    type: LOGIN_SUCCESS,
    payload: loginData

});

export const authError = loginData => ({
    type: AUTH_ERROR,
    payload: loginData
});

export const registerFail = answers => ({
    type: REGISTER_FAIL,
    payload: answers
})

// Logout
export const logoutUser = () => ({ type: LOGOUT });
