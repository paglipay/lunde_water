/* import api from '../../../utils/api';
import {
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
*/
export const logout = () => (dispatch) => {
  dispatch(logoutUser());
};

export const displayAlert = (text) => () => {
  alert(text);
}; 
