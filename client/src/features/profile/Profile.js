import React from 'react'
import { connect } from 'react-redux'
// import { fetchCollections, removeCollectionRequest, markCollectionAsActiveRequest } from '../../../redux'
// import { createTodo } from './redux/actions'
import { addAnswersRequest } from './redux/thunks'
import ProfileDisplay from '../../components/profile/Profile'

function Profile(props) {
    console.log('Questionaire props:', props)
    return (
        < ProfileDisplay {...props}/>
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
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)