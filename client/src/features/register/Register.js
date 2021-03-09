import React from 'react';
import { connect } from 'react-redux';
import { addAnswersRequest, register } from './redux/thunks';
import Register from '../../components/register/Register';
import PropTypes from 'prop-types';

const RegisterDisplay = props => {
    console.log('Questionaire props:', props)
    return (
        < Register {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders,
        //isAuthenticated: state.isAuthenticated
    }
}

/* const mapDispatchToProps = dispatch => {
    return {
        addAnswersRequest: (obj) => dispatch(addAnswersRequest(obj)),
       // register: (obj) => dispatch(register(obj))
    }
} */
RegisterDisplay.propTypes = {
    addAnswersRequest: PropTypes.func,
    register: PropTypes.func
}
/* export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterDisplay) */
export default connect(mapStateToProps, { addAnswersRequest, register })(RegisterDisplay);
