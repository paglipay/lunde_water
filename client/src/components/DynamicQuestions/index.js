import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { questions_keys } from './Data';
import DynamicQuestions from './DynamicQuestions'
import { addAnswersRequest, addAnswersToPost, getAnswersById } from './redux/thunks'
import {
    Button,
    Select
} from 'semantic-ui-react'

function Display(props) {
    const [qIndex, setQIndex] = useState(0)
    const idOptions = [{ key: '604292b444c6f014e89326ef', value: '604292b444c6f014e89326ef', text: '604292b444c6f014e89326ef' },]
    
    useEffect(() => {
        console.log('qIndex: ', qIndex)

    }, [qIndex])

    useEffect(() => {
        console.log('qIndex: ', qIndex)
        // props.getAnswersById('604292b444c6f014e89326ef', 'Register')
        // props.getAnswersById('604292b444c6f014e89326ef', 'Profile')
        // props.getAnswersById('604292b444c6f014e89326ef', 'Customer Questions')
    }, [])

    return (
        <>
            <Select placeholder='Select' options={idOptions} />
            {qIndex !== 0 ?
                <Button onClick={() => setQIndex(qIndex - 1)}>
                    Back
            </Button> : null}
            {qIndex < questions_keys.length - 1 ?
                <Button onClick={() => setQIndex(qIndex + 1)}>
                    Next
            </Button> : null}
            <h1>{questions_keys[qIndex]}</h1>
            <DynamicQuestions {...props} qIndex={qIndex} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAnswersRequest: (obj, key) => dispatch(addAnswersRequest(obj, key)),
        addAnswersToPost: (obj, key) => dispatch(addAnswersToPost(obj, key)),
        getAnswersById: (obj, key) => dispatch(getAnswersById(obj, key)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Display)
