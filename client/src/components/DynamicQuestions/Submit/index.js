import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { postAnswers, getAnswersById } from '../redux/thunks'
import { Button } from 'semantic-ui-react'

function Submit(props) {

    const handleClick = (e) => {
        console.log('handleClick: ', props.questions.post_data)
        // props.postAnswers(props.questions.post_data, 'profile')
        props.postAnswers(props.questions.results, 'app_data')
    }
    const GetButton = (e) => {
        console.log('GetButton: ', props.questions.post_data)
        // props.postAnswers(props.questions.post_data, 'profile')
        props.getAnswersById('60427f76ab5f791d44f01950', 'Register')
    }
    const GetButton2 = (e) => {
        console.log('GetButton: ', props.questions.post_data)
        // props.postAnswers(props.questions.post_data, 'profile')
        props.getAnswersById('60427f76ab5f791d44f01950', 'Profile')
    }
    const GetButton3 = (e) => {
        console.log('GetButton: ', props.questions.post_data)
        // props.postAnswers(props.questions.post_data, 'profile')
        props.getAnswersById('60427f76ab5f791d44f01950', 'Customer Questions')
    }

    return (
        <>
            <Button onClick={(e) => handleClick(e)}>Submit</Button>
            <Button onClick={(e) => GetButton(e)}>Get</Button>
            <Button onClick={(e) => GetButton2(e)}>Get</Button>
            <Button onClick={(e) => GetButton3(e)}>Get</Button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
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
