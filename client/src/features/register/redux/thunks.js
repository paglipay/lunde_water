import {
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