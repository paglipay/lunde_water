
const questions = [
  {
    question: 'Full Name', type: "text"
  },
  {
    question: 'Street Address', type: "text"
  },
  {
    question: 'Street Address2', type: "text"
  },
  {
    question: 'City', type: "text"
  },
  {
    question: 'State', type: "text"
  },
  {
    question: 'Zip Code', type: "text"
  }  
  ]
  
  export const questions_arry = [
    { headline: 'Your Profile', questions: questions }
  ]
  
  export const homeObjOne = {
    topLine: 'New Customer Questions',
    headline: 'Please Answer Questions',
    description: 'TEST DESCRIPTION',
    buttonLabel: 'Next',
    imgStart: 'start',
    img: 'images/svg-2.svg',
    alt: 'Credit Card',
    onClick: () => console.log('goto Qustion2'),
    onClickBack: () => console.log('goto Qustion2')
  };
  