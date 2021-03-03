export const CREATE_REGISTER = 'CREATE_REGISTER';
export const createAnswers = answers => ({
    type: CREATE_REGISTER,
    payload: answers,
});

export const CREATE_REGISTER_POST = 'CREATE_REGISTER_POST';
export const createPost = answers => ({
    type: CREATE_REGISTER_POST,
    payload: answers,
});

// export const REMOVE_TODO = 'REMOVE_TODO';
// export const removeTodo = todo => ({
//     type: REMOVE_TODO,
//     payload: { todo },
// });

// export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
// export const markTodoAsCompleted = todo => ({
//     type: MARK_TODO_AS_COMPLETED,
//     payload: { todo },
// });

// export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
// export const loadTodosInProgress = () => ({
//     type: LOAD_TODOS_IN_PROGRESS,
// });

// export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
// export const loadTodosSuccess = todos => ({
//     type: LOAD_TODOS_SUCCESS,
//     payload: { todos },
// });

// export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
// export const loadTodosFailure = () => ({
//     type: LOAD_TODOS_FAILURE,
// });