import {
    LOAD_INVOICES_IN_PROGRESS,
    LOAD_INVOICES_SUCCESS,
    LOAD_INVOICES_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: {} };

const answers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case LOAD_INVOICES_SUCCESS: {
            const { invoices } = payload;
            return {
                ...state,
                isLoading: false,
                data: invoices,
            };
        }
        case LOAD_INVOICES_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_INVOICES_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default answers