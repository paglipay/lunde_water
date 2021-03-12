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
    // const data = ['Profile', 'Customer Questions', 'Order Form']
    const data = props.data

    return (
        <>
            {data.map((e, i) => {
                return (
                    <Segment key={i}>
                        <span>
                            {props.qIndex > i ? <Icon name='edit' style={{ float: 'right' }} onClick={() => {
                                props.setQIndex(i)
                                props.history.push('/placeorder')
                            }} style={{ float: 'right', cursor: "pointer" }} /> : null}
                        </span>
                        
                        {props.qIndex === i ?
                            (<span><Header>
                                {/* <Image src='/images/avatar/small/elliot.jpg' size='medium' circular /> */}
                                {props.questions.results && props.questions.results[data[i]] && Object.keys(props.questions.results[data[i]]).length !== 0 ? <Icon circular name="check" /> : <Icon circular name="exclamation triangle" />}
                                {e}
                            </Header></span>) : (<>
                                {props.questions.results && props.questions.results[data[i]] && Object.keys(props.questions.results[data[i]]).length !== 0 ? <Icon circular name="check" /> : <Icon circular name="exclamation triangle" />}
                                {e}
                            </>)
                        }
                        {
                            // props.location.pathname !== '/placeorder' &&
                                props.questions.results && props.questions.results[data[i]] ? displayResults(consolidateQIndexes(props.questions.results && props.questions.results[data[i]] ? props.questions.results[data[i]] : {})) : <p></p>}
                    </Segment>
                )
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
