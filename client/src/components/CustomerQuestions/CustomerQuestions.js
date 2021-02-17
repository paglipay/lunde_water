import React, { useState, useEffect } from 'react';
import HeroSection from '../hero/HeroSection';
import { homeObjOne, questions_arry, dynamicForm } from './QuestionsData';

function CustomerQuestions() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [homeObjOneD, setHomeObjOneD] = useState(homeObjOne)
  const [questionsPost, setQuestionsPost] = useState({})

  homeObjOne.onClick = () => {
    if (questions_arry.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1)
    }
  }

  useEffect(() => {
    setHomeObjOneD({
      ...homeObjOne,
      buttonLabel: questions_arry.length == questionIndex + 1 ? 'Review / Complete' : 'Next',
      description: dynamicForm(questions_arry[questionIndex]['questions'], setQuestionsPost, questionsPost),
      img: `images/svg-${questionIndex + 1}.svg`,
      headline: questions_arry[questionIndex]['headline'],
      // lightBg: homeObjOneD.lightBg ? false : true,
      // lightText: homeObjOneD.lightText ? false : true,
      // lightTextDesc: homeObjOneD.lightTextDesc ? false : true,
      // imgStart
    })
    
    console.log('questionsPost: ', questionsPost)
  }, [questionIndex, questionsPost]);


  return (
    <>
      <HeroSection {...homeObjOneD} />
    </>
  );
}

export default CustomerQuestions;
