import React, { useState, useEffect } from 'react';
import Layout from '../semantic_ui/ResponsiveLayout/Layout';
import { homeObjOne, questions_arry } from './Data';
import { dynamicForm } from '../dynamicform/dynamicform'

function Profile(props) {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [homeObjOneD, setHomeObjOneD] = useState(homeObjOne)
  const [questionsPost, setQuestionsPost] = useState({})

  homeObjOne.onClick = () => {
    if (questions_arry.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1)
    }else{
        console.log('Submit', questionsPost)            
        props.addAnswersRequest(questionsPost)
        // props.history.push('/reviewcomplete')
    }
  }
  homeObjOne.onClickBack = () => {
    if (questionIndex !== 0) {
      setQuestionIndex(questionIndex - 1)
    }else{
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

export default Profile;
