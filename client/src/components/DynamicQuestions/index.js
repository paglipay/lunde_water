import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { questions_keys } from './Data';
import DynamicQuestions from './DynamicQuestions'
import { addAnswersRequest, addAnswersToPost, getAnswersById } from './redux/thunks'
import {
    Button,
    Container,
    Grid,
    Select
} from 'semantic-ui-react'

function Display(props) {
    const [customerId, setCustomerId] = useState()
    const [qIndex, setQIndex] = useState(0)
    const idOptions = [
        { key: "60467d8f8423ad02049bd11a", value: "60467d8f8423ad02049bd11a", text: "60467d8f8423ad02049bd11a" },
        { key: "60467dfde235da0404f636e4", value: "60467dfde235da0404f636e4", text: "60467dfde235da0404f636e4" },
    ]

    const questions_keys = props.questions_keys

    useEffect(() => {
        console.log('qIndex: ', qIndex)
        if (customerId) {
            // props.getAnswersById(customerId, 'Register')
            props.getAnswersById(customerId, 'Profile')
            props.getAnswersById(customerId, 'Customer Questions')
        }
    }, [customerId, qIndex])


    const adminMode = (<>
        <h1>Administration Mode:</h1>
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
            {true && adminMode}
            <DynamicQuestions {...props} qIndex={qIndex} setQIndex={setQIndex} />
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
