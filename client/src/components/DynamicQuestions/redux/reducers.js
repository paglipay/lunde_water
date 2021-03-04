import {
    CREATE_ANSWER,
    CREATE_REGISTER_POST
} from './actions';

const initialState = { isLoading: false, data: {} };

const output = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_ANSWER: {
            const {data, key} = payload;
            return {
                ...state,
                results: { ...state.results, [key]: data },
            };
        }
        case CREATE_REGISTER_POST: {
            const answers = payload;
            return {
                ...state,
                post_data: { ...state.post_data, answers},
            };
        }
        default:
            return state;
    }
}

export default output