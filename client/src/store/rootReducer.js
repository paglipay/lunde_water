import { combineReducers } from 'redux';
import auth from '../features/auth/reducers/auth';
import orders from '../features/orders/redux/reducers';
import customeranswers from '../features/questionaire/redux/reducers';
import profile from '../features/profile/redux/reducers';
import register from '../features/register/redux/reducers';
// import orderform from '../features/orderform/redux/reducers';
export default combineReducers({
     auth,
     orders,
     customeranswers,
     profile,
     register,
     // orderform
});

