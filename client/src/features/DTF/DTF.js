import React from 'react'
import { connect } from 'react-redux'
// import { fetchCollections, removeCollectionRequest, markCollectionAsActiveRequest } from '../../../redux'
// import { createTodo } from './redux/actions'
import { addAnswersRequest } from './redux/thunks'
import DynamicTableForm from '../../components/DynamicTable/DynamicTableForm'


function DTF(props) {
    console.log('DTF props:', props)
    return (
        < DynamicTableForm {...props} />
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
)(DTF)
