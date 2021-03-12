import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { questions_keys } from './Data';
import DynamicQuestions from './DynamicQuestions'
import { addAnswersRequest, addAnswersToPost, getAnswersById } from './redux/thunks'
import {
    Button,
    Checkbox,
    Container,
    Grid,
    Select
} from 'semantic-ui-react'

function Display(props) {
    const [adminMode, setAdminMode] = useState(false)
    const [customerId, setCustomerId] = useState()
    const [qIndex, setQIndex] = useState(0)
    const idOptions = [
        { key: "604a9cca8ea73722c407a9d1", value: "604a9cca8ea73722c407a9d1", text: "604a9cca8ea73722c407a9d1" },
        { key: "604aa122a5649a26486360c8", value: "604aa122a5649a26486360c8", text: "604aa122a5649a26486360c8" },
        { key: "604ab4b401f8d820f0d6e7cc", value: "604ab4b401f8d820f0d6e7cc", text: "604ab4b401f8d820f0d6e7cc" },
//604a884365bc1d07400c4684
    ]

    const questions_keys = props.questions_keys

    useEffect(() => {
        console.log('qIndex: ', qIndex)
        if (customerId) {
            // props.getAnswersById(customerId, 'Register')
            props.getAnswersById(customerId, 'Profile')
            props.getAnswersById(customerId, 'Customer Questions')
            // props.getAnswersById(customerId, 'Orders')
        }
    }, [customerId])

    const adminModeDisplay = (<>
        <h1>Employee Administration Mode:</h1>
        {qIndex < questions_keys.length - 1 ?
            <Button onClick={() => setQIndex(qIndex + 1)} primary>
                New
            </Button> : null}
        <Select placeholder='Select' onChange={(e, { value }) => setCustomerId(value)} options={idOptions} />
        <Container>
            <Grid columns={2} stackable>
                <Grid.Row columns={3}>
                    <Grid.Column width={5}>
                        {qIndex !== 0 ?
                            <Button onClick={() => setQIndex(qIndex - 1)} size='huge' primary>
                                Back
                            </Button> : null}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h1 style={{ textAlign: 'center' }}>{questions_keys[qIndex]}</h1>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        {qIndex < questions_keys.length - 1 ?
                            <Button onClick={() => setQIndex(qIndex + 1)} style={{ float: 'right' }} size='huge' primary>
                                Next
                            </Button> : null}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </>)

    return (
        <>
            <Checkbox label='Employee Admin Mode' onChange={() => setAdminMode(!adminMode)} />
            {adminMode && adminModeDisplay}
            <DynamicQuestions {...props} qIndex={qIndex} setQIndex={setQIndex} customerId={customerId} />
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
