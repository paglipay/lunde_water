import React, { useState, useEffect } from 'react'
import { dynamicForm } from '../dynamicform'
import { questions_arry as q1, homeObjOne } from '../../CustomerQuestions/QuestionsData'
import Layout from '../../semantic_ui/ResponsiveLayout/DTable';

function DForm(props) {
    
    const questions_keys = ['Customer Questions']
    const [dFromProps, setDFromProps] = useState(homeObjOne)
    const [arrayOfQuestionsArry, setArrayOfQuestionsArry] = useState([q1])
    const [questionIndex, setQuestionIndex] = useState(0)
    const [qIndex, setQIndex] = useState(0)
    const [questionsPost, setQuestionsPost] = useState({})

    homeObjOne.onClick = () => {
        if (arrayOfQuestionsArry[qIndex].length > questionIndex + 1) {
            setQuestionIndex(questionIndex + 1)
        } else {
            console.log('Submit', questionsPost, questions_keys[qIndex])
            // props.addAnswersToPost(restructureQuestionsForPost(questionsPost), questions_keys[qIndex])
            props.addAnswersRequest(questionsPost, questions_keys[qIndex])
            setQuestionsPost({})
            setQuestionIndex(0)

            if (questions_keys.length - 1 > qIndex) {
                setQIndex(qIndex + 1)
            }
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
        // console.log('questionsPost: ', questionsPost)
        dFromProps({
            ...homeObjOne,
            questionIndex,
            buttonLabel: arrayOfQuestionsArry[qIndex].length === questionIndex + 1 ? 'Review / Complete' : 'Next',
            description: dynamicForm(props, arrayOfQuestionsArry[qIndex][questionIndex]['questions'], setQuestionsPost, questionsPost, arrayOfQuestionsArry[qIndex][questionIndex]['headline']),
            headline: arrayOfQuestionsArry[qIndex][questionIndex]['headline'],
        })
    }, [questionIndex, questionsPost]);

    return (
        <>
            <h1>
                DForm
            </h1>
            <Layout {...props} questionIndex={questionIndex} {...dFromProps}>
                {dFromProps.description}
            </Layout>
        </>
    )
}

export default DForm
