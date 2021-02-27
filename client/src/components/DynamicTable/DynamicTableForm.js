import React, { useState, useEffect } from 'react';
import { homeObjOne, questions_arry } from './DTFData';
import { dynamicForm } from '../dynamicform/dynamicform'
import DTable from './DynamicTable'
import Layout from './DTFLayout'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
} from 'semantic-ui-react'

const restructureForTable = (data) => {
    console.log('restructureForTable: ', data)
    let state = {}
    Object.keys(data).forEach((q) => {
        switch (q) {
            case "What name of input?": {
                console.log('case: ', data[q].answer)
                state = {
                    ...state,
                    question: data[q].answer,
                };
                break;
            }
            case "What type of input?": {
                console.log('case: ', data[q].answer)
                state = {
                    ...state,
                    type: data[q].answer,
                };
                break;
            }
            case "Add a option(s), comma delimited.": {
                console.log('case: ', data[q].answer)
                state = {
                    ...state,
                    options: data[q].answer.split(',').map(e => { return { 'value': e.trim(), 'id': e.trim() } }),
                };
                break;
            }
            case "What is the previous input that this would be dependent on?": {
                console.log('case: ', data[q].answer)
                state = {
                    ...state,
                    condition: { ...state.condition, property: data[q].answer },
                };
                break;
            }
            case "Add a value(s), comma delimited.": {
                console.log('case: ', data[q].answer)
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
        console.log('questionsArry', questionsArry)
        console.log('questionsPost: ', questionsPost)
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
                    <br />
                    {/* <Button onClick={() => {
                        console.log('Submit', questionsArry)

                        const questions1 = [
                            { question: 'What name of input?', type: "text" },
                            {
                                question: 'What type of input?', type: "select",
                                options: [
                                    { value: 'Message', id: 'message' },
                                    { value: 'Text', id: 'text' },
                                    { value: 'Select', id: 'select' },
                                    { value: 'Text Area', id: 'textarea' },
                                ],
                            },
                            {
                                question: 'Add a option(s), comma delimited.', type: "textarea",
                                condition: { property: "What type of input?", value: ['select'] }
                            }

                        ]




                        setQuestionsArry([...questionsArry,
                        { headline: `Lets create your form Input ${questionsArry.length}?`, questions: questions1 },
                        ])
                    }} >Create</Button> */}
                </Grid.Column>
                <Grid.Column>
                    <h2>questionIndex:{questionIndex}</h2>
                    <DTable data={newQuestionsArry} headers={['question', 'type', 'options']} />
                    <Button onClick={feedToSelf} >Feed to Self</Button>
                </Grid.Column>
            </Grid>
            <Divider vertical>And</Divider>
        </Container>
    );
}

export default DynamicTableForm;
