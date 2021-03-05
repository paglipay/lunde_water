import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { postAnswers } from '../redux/thunks'
import { Button } from 'semantic-ui-react'

function Submit(props) {

    const handleClick = (e) => {
        console.log('handleClick: ', props.questions.post_data)
        props.postAnswers(props.questions.post_data, 'profile')
    }

    return (
        <>
            <Button onClick={(e) => handleClick(e)}>Submit</Button>
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Submit)
