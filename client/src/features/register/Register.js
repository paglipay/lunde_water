import React from 'react'
import { connect } from 'react-redux'
// import { fetchCollections, removeCollectionRequest, markCollectionAsActiveRequest } from '../../../redux'
// import { createTodo } from './redux/actions'
import { addAnswersRequest, addAnswersToPost } from './redux/thunks'
import { register } from '../auth/actions/auth'
import Register from '../../components/register/Register'

function RegisterDisplay(props) {
    console.log('Questionaire props:', props)
    return (
        < Register {...props}/>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAnswersRequest: (obj) => dispatch(addAnswersRequest(obj)),
        addAnswersToPost: (obj) => dispatch(addAnswersToPost(obj)),
        register: (obj) => dispatch(register(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterDisplay)
