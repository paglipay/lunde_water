import {
    CREATE_ANSWER,
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
        default:
            return state;
    }
}

export default output