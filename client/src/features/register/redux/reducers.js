import {
    CREATE_REGISTER,
<<<<<<< HEAD
    CREATE_REGISTER_POST,
    // REMOVE_TODO,
    // MARK_TODO_AS_COMPLETED,
    // LOAD_TODOS_IN_PROGRESS,
    // LOAD_TODOS_SUCCESS,
    // LOAD_TODOS_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: {}, post_data: {} };

const answers = (state = initialState, action) => {
=======
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT
  } from './actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
  const auth = (state = initialState, action) => {
>>>>>>> 987edeb4999dc5a224cde890afda721f63d9bf40
    const { type, payload } = action;
  
    switch (type) {
<<<<<<< HEAD
        case CREATE_REGISTER: {
            const answers = payload;
            return {
                ...state,
                data: answers,
            };
        }
        case CREATE_REGISTER_POST: {
            const answers = payload;
            return {
                ...state,
                post_data: answers,
            };
        }
        // case REMOVE_TODO: {
        //     const { todo: todoToRemove } = payload;
        //     return {
        //         ...state,
        //         data: state.data.filter(todo => todo.id !== todoToRemove.id),
        //     };
        // }
        // case MARK_TODO_AS_COMPLETED: {
        //     const { todo: updatedTodo } = payload;
        //     return {
        //         ...state,
        //         data: state.data.map(todo => {
        //             if (todo.id === updatedTodo.id) {
        //                 return updatedTodo;
        //             }
        //             return todo;
        //         }),
        //     };
        // }
        // case LOAD_TODOS_SUCCESS: {
        //     const { todos } = payload;
        //     return {
        //         ...state,
        //         isLoading: false,
        //         data: todos,
        //     };
        // }
        // case LOAD_TODOS_IN_PROGRESS:
        //     return {
        //         ...state,
        //         isLoading: true,
        //     }
        // case LOAD_TODOS_FAILURE:
        //     return {
        //         ...state,
        //         isLoading: false,
        //     }
        default:
            return state;
=======
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
      case CREATE_REGISTER:
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case AUTH_ERROR:
      case LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null
        };
      default:
        return state;
>>>>>>> 987edeb4999dc5a224cde890afda721f63d9bf40
    }
  }
  
  export default auth;
