import {
    loadsInProgress,
    loadsSuccess,
    loadsFailure,

} from './actions';
import axios from 'axios'

export const load = () => async dispatch => {
    console.log('load:')
    dispatch(loadsInProgress());
    axios
        .get('/api/invoices')
        .then(response => {
            // response.data is the invoices
            const configs = response.data
            dispatch(loadsSuccess({ payload: response.data }))
        })
        .catch(error => {
            // error.message is the error message
            dispatch(loadsFailure(error.message))
        })

}

export const displayAlert = text => () => {
    alert(text);
};