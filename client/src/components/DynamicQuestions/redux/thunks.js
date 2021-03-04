import {
    createAnswers,
} from './actions';
import axios from 'axios'

export const addAnswersRequest = (text, key) => async dispatch => {
    console.log('text: ', text, key)
    try {
        dispatch(createAnswers(text, key));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
};