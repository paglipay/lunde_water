<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
// import { fetchCollections, removeCollectionRequest, markCollectionAsActiveRequest } from '../../../redux'
// import { createTodo } from './redux/actions'
import { addAnswersRequest, addAnswersToPost } from './redux/thunks'
import { register } from '../auth/actions/auth'
import Register from '../../components/register/Register'
=======
import React from 'react';
import { connect } from 'react-redux';
import { register, addAnswersRequest } from './redux/actions/actions';
import Register from '../../components/register/Register';
>>>>>>> 987edeb4999dc5a224cde890afda721f63d9bf40

const RegisterDisplay = props => {
    console.log('Questionaire props:', props)
    return (
        < Register {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders,
        isAuthenticated: state.auth.isAuthenticated,
    }
}

  const mapDispatchToProps = dispatch => {
    return {
        addAnswersRequest: (obj) => dispatch(addAnswersRequest(obj)),
<<<<<<< HEAD
        addAnswersToPost: (obj) => dispatch(addAnswersToPost(obj)),
        register: (obj) => dispatch(register(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
=======
        register: (formData) => dispatch(register(formData))
>>>>>>> 987edeb4999dc5a224cde890afda721f63d9bf40
    }
}  
/* RegisterDisplay.propTypes = {
    addAnswersRequest: PropTypes.func,
    register: PropTypes.func
} */
 export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterDisplay) 
//export default connect(mapStateToProps, { addAnswersRequest, register })(RegisterDisplay);
