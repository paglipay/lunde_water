import React, { useState, useEffect } from 'react';
import Layout from '../semantic_ui/ResponsiveLayout/Layout';
import { homeObjOne, questions_arry } from './QuestionsData';
import { dynamicForm } from '../dynamicform/dynamicform'

function CustomerQuestions(props) {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [homeObjOneD, setHomeObjOneD] = useState(homeObjOne)
  const [questionsPost, setQuestionsPost] = useState({})

  homeObjOne.onClick = () => {
    if (questions_arry.length > questionIndex + 1) {
      //Next Button
      setQuestionIndex(questionIndex + 1)
    } else {
      //Button says Submit
      console.log('Submit', questionsPost)
      props.addAnswersRequest(questionsPost)
      props.history.push('/orders')
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
      buttonLabel: questions_arry.length === questionIndex + 1 ? 'Review / Complete' : 'Next',
      description: dynamicForm(questions_arry[questionIndex]['questions'], setQuestionsPost, questionsPost, questions_arry[questionIndex]['headline']),
      img: `images/svg-${questionIndex + 1}.svg`,
      headline: questions_arry[questionIndex]['headline'],
      // lightBg: homeObjOneD.lightBg ? false : true,
      // lightText: homeObjOneD.lightText ? false : true,
      // lightTextDesc: homeObjOneD.lightTextDesc ? false : true,
      imgStart: 'start'
    })

    console.log('questionsPost: ', questionsPost)
  }, [questionIndex, questionsPost]);

  return (
    <>
      <Layout {...homeObjOneD}>{homeObjOneD.description}</Layout>

    </>
  );
}

export default CustomerQuestions;
