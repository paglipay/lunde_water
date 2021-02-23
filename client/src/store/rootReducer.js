import { combineReducers } from 'redux';
import auth from '../features/auth/reducers/auth';
import orders from '../features/orders/redux/reducers';
import customeranswers from '../features/questionaire/redux/reducers';
export default combineReducers({
     auth,
     orders,
     customeranswers
});

