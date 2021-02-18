
const questions = [
    { question: 'What would you like to order?', type: "text" }

]

export const questions_arry = [
    { headline: 'Please Specify Your Order?', questions: questions },
]

export const homeObjOne = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'New Customer Questions',
    headline: 'Please Answer Questions',
    description: 'TEST DESCRIPTION',
    buttonLabel: 'Next',
    imgStart: 'start',
    img: 'images/svg-2.svg',
    alt: 'Credit Card',
    onClick: () => console.log('goto Qustion2')
};