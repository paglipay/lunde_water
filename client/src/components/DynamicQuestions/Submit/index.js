import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { postAnswers, getAnswersById } from '../redux/thunks'
import { Button, Checkbox, Select } from 'semantic-ui-react'

function Submit(props) {

    const [checked, setChecked] = useState()

    const handleClick = (e) => {
        e.preventDefault()
        console.log('handleClick: ', props.questions.post_data)
        // props.postAnswers(props.questions.results, 'profiles')
        // props.postAnswers(props.questions.post_data, 'orders')

        props.location.pathname === '/placeorder' && props.history.push('/reviewcomplete')
        props.location.pathname === '/reviewcomplete' && props.postAnswers({ ...props.questions.post_data, userId: props.auth.user._id }, 'orders') && props.history.push('/orders')
        props.location.pathname === '/profile' && props.postAnswers({ ...props.questions.results, userId: props.auth.user._id }, 'profiles') && props.history.push('/orders')
        // props.location.pathname !== '/reviewcomplete' ? props.history.push('/orders') : props.history.push('/reviewcomplete')


    }
    return (
        <>
            <Button onClick={(e) => handleClick(e)} color={checked ? 'green' : 'disabled'}>Submit</Button>
            {' '}
            <Checkbox onClick={() => {
                const allGood = ['Profile', 'Orders', 'Customer Questions'].map(e => props.questions.results && props.questions.results[e] && Object.keys(props.questions.results[e]).length !== 0 ? true : false) 
                allGood.every((e) => e) && setChecked(!checked)

            }} label='I agree to the Terms and Conditions' />
        </>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postAnswers: (obj, key) => dispatch(postAnswers(obj, key)),
        getAnswersById: (obj, key) => dispatch(getAnswersById(obj, key)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Submit)
