
const questions = [
    { question: 'How many input fields woulf you like to start with?', type: "text" },

]
const questions1 = [
    { question: 'What name of input?', type: "text" },
    {
        question: 'What type of input?', type: "select",
        options: [
            { value: 'Message', id: 'message' },
            { value: 'Text', id: 'text' },
            { value: 'Select', id: 'select' },
            { value: 'Text Area', id: 'textarea' },
            { value: 'Yes / No', id: 'y/n' },
        ],
    },
    {
        question: 'Add a option(s), comma delimited.', type: "textarea",
        condition: { property: "What type of input?", value: ['select'] }
    },
    {
        question: "Is this dependent on any previous field's value to show?", type: "y/n"
    },
    {
        question: 'What is the previous input that this would be dependent on?', type: "text",
        condition: { property: "Is this dependent on any previous field's value to show?", value: ['Yes'] }
    },
    {
        question: 'Add a value(s), comma delimited.', type: "text",
        condition: { property: "Is this dependent on any previous field's value to show?", value: ['Yes'] }
    }

]

export const questions_arry = [
    // { headline: 'Lets create your form?', questions: questions },
    { headline: 'Lets create your form Input?', questions: questions1 },
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
