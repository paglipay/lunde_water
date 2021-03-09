import { combineReducers } from 'redux';
import orders from '../features/orders/redux/reducers';
import customeranswers from '../features/questionaire/redux/reducers';
import profile from '../features/profile/redux/reducers';
import auth from '../features/register/redux/reducers';
// import orderform from '../features/orderform/redux/reducers';
export default combineReducers({
     orders,
     customeranswers,
     profile,
     auth,
     // orderform
});

