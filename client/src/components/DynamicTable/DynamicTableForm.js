import React, { useState, useEffect } from 'react';
import { homeObjOne, questions_arry } from './DTFData';
import { dynamicForm } from '../dynamicform/dynamicform'
import DTable from './DynamicTable'
import Layout from './DTFLayout'
import {
    Button,
    Container,
    Divider,
    Grid
} from 'semantic-ui-react'

const restructureForTable = (data) => {
    console.log('restructureForTable: ', data)
    let state = {}
    Object.keys(data).forEach((q) => {
        switch (q) {
            case "What name of input?": {
                state = {
                    ...state,
                    question: data[q].answer,
                };
                break;
            }
            case "What type of input?": {
                state = {
                    ...state,
                    type: data[q].answer,
                };
                break;
            }
            case "Add a option(s), comma delimited.": {
                state = {
                    ...state,
                    options: data[q].answer.split(',').map(e => { return { 'value': e.trim(), 'id': e.trim() } }),
                };
                break;
            }
            case "What is the previous input that this would be dependent on?": {
                state = {
                    ...state,
                    condition: { ...state.condition, property: data[q].answer },
                };
                break;
            }
            case "Add a value(s), comma delimited.": {
                state = {
                    ...state,
                    condition: { ...state.condition, value: data[q].answer.split(',').map(e => e.trim()) },
                };
                break;
            }
            default:
                return state;
        }
    })
    console.log("restructureForTable:", state)
    return state
}

function DynamicTableForm(props) {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [homeObjOneD, setHomeObjOneD] = useState(homeObjOne)
    const [questionsArry, setQuestionsArry] = useState(questions_arry)
    const [questionsPost, setQuestionsPost] = useState({})
    const [newQuestionsArry, setNewQuestionsArry] = useState([])

    homeObjOne.onClick = () => {
        if (questionsArry.length > questionIndex + 1) {
            setQuestionIndex(questionIndex + 1)
        } else {
            console.log('Submit', questionsPost)
            setNewQuestionsArry([...newQuestionsArry, restructureForTable(questionsPost)])
            setQuestionsPost({})
        }
    }
    homeObjOne.onClickBack = () => {
        if (questionIndex !== 0) {
            setQuestionIndex(questionIndex - 1)
        } else {
            console.log('Submit', questionsPost)
        }
    }

    useEffect(() => {
        console.log('newQuestionsArry: ', newQuestionsArry)
    }, [newQuestionsArry])

    useEffect(() => {
        setHomeObjOneD({
            ...homeObjOne,
            questionIndex,
            buttonLabel: questionsArry.length === questionIndex + 1 ? 'Review / Complete' : 'Next',
            description: dynamicForm(questionsArry[questionIndex]['questions'], setQuestionsPost, questionsPost, questionsArry[questionIndex]['headline']),
            img: `images/svg-${questionIndex + 1}.svg`,
            headline: questionsArry[questionIndex]['headline'],
            imgStart: 'start'
        })
    }, [questionIndex, questionsPost, questionsArry]);

    const feedToSelf = () => {

        setQuestionsArry([{ headline: "Feed Myself", questions: newQuestionsArry }])

    }

    return (
        <Container>
            <h2>questionsArry.length:{questionsArry.length}</h2>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <Layout {...homeObjOneD}>{homeObjOneD.description}</Layout>
                </Grid.Column>
                <Grid.Column>
                    <h2>questionIndex:{questionIndex}</h2>
                    <DTable data={newQuestionsArry} headers={['question', 'type', 'options', 'condition']} />
                    <Button onClick={feedToSelf} >Feed to Self</Button>
                </Grid.Column>
            </Grid>
            <Divider vertical>And</Divider>
        </Container>
    );
}

export default DynamicTableForm;
