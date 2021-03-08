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

export const register = answers => ({
    type: REGISTER_SUCCESS, 
    payload: answers
});

export const loadUser = userData => ({
    type: USER_LOADED,
    payload: userData
});

export const login = loginData => ({
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
export const logout = () => ({ type: LOGOUT });
