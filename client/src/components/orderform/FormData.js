
const questions = [
    { question: 'What would you like to order?', type: "select", options: [
        { value: 'Fill water tank', id: 'pr_12345' },
        { value: 'Other', id: 'pr_4567' }
    ] },
    { question: 'Please select a date and time.', type: "datetime" },
    { question: 'Please sepecify any details.', type: "textarea" },
    // { question: 'Please sepecify any details.', type: "textarea", condition: { property: "What would you like to order?", value: ['Other', 'Fill water tank'] } }

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