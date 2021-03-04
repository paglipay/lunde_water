import {
    createAnswers,
    createPost,
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

export const addAnswersToPost = (text, key) => async dispatch => {
    console.log('text: ', text, key)
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
        dispatch(createPost(text, key));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
};