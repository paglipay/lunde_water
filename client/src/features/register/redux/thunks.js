/* import api from '../../../utils/api';
import {
<<<<<<< HEAD
    createAnswers,
    createPost,
    // removeTodo,
    // loadTodosInProgress,
    // loadTodosSuccess,
    // loadTodosFailure,
    // markTodoAsCompleted,
} from './actions';
import axios from 'axios'

export const addAnswersRequest = text => async dispatch => {
    console.log('text: ', text)
    try {

        dispatch(createAnswers(text));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const addAnswersToPost = text => async dispatch => {
    console.log('text: ', text)
    try {
        const body = JSON.stringify({ text });
        // const response = await fetch('/todos', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     method: 'post',
        //     body,
        // });
        // const todo = await response.json();
        dispatch(createPost(text));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
};
=======
  createAnswers,
  //createPost,
  getUserDoc,
  //authError,
  logoutUser
} from './actions/actions';

export const addAnswersRequest = (text) => async (dispatch) => {
  console.log('text: ', text);
  try {
    dispatch(createAnswers(text));
  } catch (err) {
    //dispatch(displayAlert())
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');
    dispatch(getUserDoc(res.data));
    
  } catch (err) {
    //dispatch(err.msg)
  }
};

export const register = (formData) => async (dispatch) => {
  try {

    const res = await api.post('/users', formData);
    dispatch(loadUser(res.body));
  } catch (err) {
    dispatch(displayAlert('Signup failed'));
  }
};

export const login = (username, email, password) => async (dispatch) => {
  const body = { username, email, password };

  try {
    const res = await api.post('/auth', body);

    dispatch(loadUser(res.body));
  } catch (err) {
    dispatch(displayAlert('Login failed'));
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutUser());
};

export const displayAlert = (text) => () => {
  alert(text);
}; */
>>>>>>> 987edeb4999dc5a224cde890afda721f63d9bf40
