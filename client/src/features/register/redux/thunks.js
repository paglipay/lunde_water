import api from '../../../utils/api';
import { createAnswers, getUserDoc, authError, logoutUser } from './actions/actions';

export const addAnswersRequest = (text) => async (dispatch) => {
  console.log('text: ', text);
  try {
    dispatch(createAnswers(text));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth');
    dispatch(getUserDoc(res.data));
  } catch (err) {
    dispatch(authError());
  }
};

export const register = (answers) => async dispatch => {
  try {
    const res = await api.post('/users', answers);
    dispatch(loadUser(res.body));
  } catch (err) {
    dispatch(authError());
  }
};

export const login = (username, email, password) => async dispatch => {
  const body = { username, email, password };

  try {
    const res = await api.post('/auth', body);

    dispatch(loadUser(res.body));
  } catch (err) {
    dispatch(authError());
  }
};

export const logout = () => dispatch => {
  dispatch(logoutUser());
};

export const displayAlert = text => () => {
  alert(text);
};
