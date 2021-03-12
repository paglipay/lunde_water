
const questions = [
    // {
    //     question: 'What would you like to order?', type: "select", id: "price_id",
    //     options: [
    //         { value: 'Fill water tank', id: 'pr_12345' },
    //         { value: 'Other', id: 'pr_4567' }
    //     ]
    // },
    { question: 'Please select a date', type: "date", id: "date" },
    {
        question: 'What time would you prefer for the delivery?', type: "select", id: "prefered_time_delivery", required: true,
        options: [
            { value: 'Morning', id: '15-19' },
            { value: 'Noon', id: '20-24' },
            { value: 'Evening', id: '25-28' }
        ]
    },
    // { question: 'Please select an estimated time(s)', type: "dropdown" },
    // { question: 'Please select an estimated start time', type: "time" },
    // { question: 'Please select an estimated end time', type: "time" },
    { question: 'Please add any relevant details', type: "textarea", id: "details" },
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