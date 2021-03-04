import React, { useState, useEffect, useRef } from 'react';
import Layout from '../semantic_ui/ResponsiveLayout/Layout';
import { homeObjOne, array_of_questions_arry, questions_keys } from './Data';
import { dynamicForm } from '../dynamicform/dynamicform'
import Answers from './Answers/Answers'

function DynamicQuestions(props) {

  const [arrayOfQuestionsArry, setArrayOfQuestionsArry] = useState(array_of_questions_arry)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [homeObjOneD, setHomeObjOneD] = useState(homeObjOne)
  const [questionsPost, setQuestionsPost] = useState({})

  homeObjOne.onClick = () => {
    if (arrayOfQuestionsArry[props.qIndex].length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      console.log('Submit', questionsPost, questions_keys[props.qIndex])
      props.addAnswersRequest(questionsPost, questions_keys[props.qIndex])
      setQuestionsPost({})
      // props.history.push('/orders')
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
    setHomeObjOneD({
      ...homeObjOne,
      questionIndex,
      buttonLabel: arrayOfQuestionsArry[props.qIndex].length === questionIndex + 1 ? 'Review / Complete' : 'Next',
      description: dynamicForm(arrayOfQuestionsArry[props.qIndex][questionIndex]['questions'], setQuestionsPost, questionsPost, arrayOfQuestionsArry[props.qIndex][questionIndex]['headline']),
      headline: arrayOfQuestionsArry[props.qIndex][questionIndex]['headline'],
    })

  }, [questionIndex, questionsPost, props.qIndex]);

  return (
    <>
      <Layout key={props.qIndex} {...homeObjOneD}>
        {homeObjOneD.description}
        <Answers />
        </Layout>
    </>
  );
}

export default DynamicQuestions;
