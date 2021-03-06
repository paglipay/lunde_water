import React from 'react'
import { connect } from 'react-redux'
import PlaceOrderDisplay from '../../components/profile'
import { homeObjOne, array_of_questions_arry, questions_keys } from './Data';

function PlaceOrder(props) {
    return (
        < PlaceOrderDisplay {...props} 
        homeObjOne={homeObjOne} 
        array_of_questions_arry={array_of_questions_arry} 
        questions_keys={questions_keys} 
        // customerId="604292b444c6f014e89326ef"
        />
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceOrder)
