import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import {
    Button,
    Header,
    Segment,
    Icon,
    Image,
} from 'semantic-ui-react'

const consolidateQIndexes = (data) => {
    let results = {}
    Object.keys(data).forEach((prop) => {
        if (results.hasOwnProperty(data[prop].qIndex) === false) { results[data[prop].qIndex] = [] }
        results[data[prop].qIndex].push({ question: prop, answer: data[prop].answer })
    })
    return results
}

const displayResults = (results) => {
    return Object.keys(results).map((e, i) => {
        return (<><hr /><h3>{e}</h3>{results[e].map(l => {
            return (<p><b>{l.question}</b><br />{l.answer}</p>)
        })}</>)
    })
}

function Answers(props) {
    const data = ['Profile', 'Customer Questions', 'Order Form']
    // const data = ['Order Form', 'Customer Questions', 'Profile', 'Register' ]

    return (
        <>
            {data.map((e, i) => {
                return (
                    <Segment key={i}>
                        <span>
                            {/* <Button  onClick={() => props.setQIndex(i)} style={{ float: 'right' }}> */}
                            {/* <Label style={{ float: 'right' }}> */}
                            <Icon name='edit' style={{ float: 'right' }} onClick={() => {
                                props.setQIndex(i)  
                                props.history.push('/profile')            
                                }} style={{ float: 'right', cursor: "pointer" }} />
                            {/* </Label> */}
                            {/* </Button> */}
                        </span>
                        <span><Header>
                            {/* <Image src='/images/avatar/small/elliot.jpg' size='medium' circular /> */}
                            {props.questions.results && props.questions.results[data[i]] ? <Icon circular name="check" size='tiny' /> : <Icon circular name="exclamation triangle" size='tiny' />}
                            {e}</Header></span>
                        {props.questions.results && props.questions.results[data[i]] ? displayResults(consolidateQIndexes(props.questions.results && props.questions.results[data[i]] ? props.questions.results[data[i]] : {})) : <p>Help us help you! Please fill in as many answers as you can. Thank you!</p>}
                    </Segment>)
            })}
        </>
    );
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Answers)
