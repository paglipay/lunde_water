import {
    createTodo,
    removeTodo,
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure,
    markTodoAsCompleted,
} from './actions';
import axios from 'axios'

// export const loadTodos = () => async dispatch => {
//     // try {
//     //     dispatch(loadTodosInProgress());
//     //     const response = await fetch('/todos');
//     //     const todos = await response.json();

//     //     await dispatch(loadTodosSuccess(todos));
//     // } catch (e) {
//     //     dispatch(loadTodosFailure());
//     //     dispatch(displayAlert(e));
//     // }

//     dispatch(loadTodosInProgress());
//     axios
//       .post('/api/todos', data)
//       .then(response => {
//         // response.data is the users
//         const configs = response.data
//         console.log('response.data.results: ', configs)
//       })
//       .catch(error => {
//         // error.message is the error message
//         dispatch(fetchConfigsFailure(error.message))
//       })

// }

// export const addTodoRequest = text => async dispatch => {
//     try {
//         const body = JSON.stringify({ text });
//         // const response = await fetch('/todos', {
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //     },
//         //     method: 'post',
//         //     body,
//         // });
//         // const todo = await response.json();
//         dispatch(createTodo(text));
//     } catch (e) {
//         dispatch(displayAlert(e));
//     }
// }

export const addTodoRequest = text => async dispatch => {

    console.log('text: ', text)
    // const body = JSON.stringify({ text });
    // console.log('body: ', body)
    axios
        .post('/api/orders', text)
        .then(response => {
            // response.data is the users
            const data = response.data
            console.log('response.data.results: ', data)
            dispatch(createTodo(data));
        })
        .catch((e) => {
            console.log('catch', e)
            dispatch(displayAlert(e))
        })

}

// export const removeTodoRequest = id => async dispatch => {
//     try {
//         const response = await fetch(`/todos/${id}`, {
//             method: 'delete'
//         });
//         const removedTodo = await response.json();
//         dispatch(removeTodo(removedTodo));
//     } catch (e) {
//         dispatch(displayAlert(e));
//     }
// }

// export const markTodoAsCompletedRequest = id => async dispatch => {
//     try {
//         const response = await fetch(`/todos/${id}/completed`, {
//             method: 'post'
//         });
//         const updatedTodo = await response.json();
//         dispatch(markTodoAsCompleted(updatedTodo));
//     } catch (e) {
//         dispatch(displayAlert(e));
//     }
// }

export const displayAlert = text => () => {
    alert(text);
};