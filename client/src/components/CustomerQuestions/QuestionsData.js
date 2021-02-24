const questions1 = [
  { question: 'Do you need to be home for the delivery?', type: "y/n" },
  // { question:'Do you have a preferred day of delivery?', type:"week"},
  {
    question: 'Do you have a preferred time of delivery?',
    type: "datetime",
    condition: { property: "Do you need to be home for the delivery?", value: ['Yes'] }
  },
]

const questions2 = [
  { question: 'Does GPS take us to your property?', type: "y/n" },
  { question: 'Are there any specific directions and details that we need to know to reach your property?', type: "textarea" },
]

const questions3 = [
  { question: "Do we need to enter the gated property at all (if there’s even a gate)?", type: "y/n" },
  {
    question: 'Are there any gate codes, padlock combinations or other barriers to property entry that we need to know about?',
    type: "y/n",
    condition: { property: "Do we need to enter the gated property at all (if there’s even a gate)?", value: ['Yes'] }
  },
  {
    question: 'If so, Please Enter Code.',
    type: "text",
    condition: { property: "Are there any gate codes, padlock combinations or other barriers to property entry that we need to know about?", value: ['Yes'] }
  },
]

const questions4 = [
  { question: 'Do we fill your water tank by connecting to a hydrant or by connecting directly to the tank through the top hole or a valve that is connected to the tank?', type: "textarea" },
  { question: 'How close can our tanker truck get to the tank or hydrant?', type: "text" },
]

export const questions_arry = [
  { headline: 'Time for a Delivery?', questions: questions1 },
  { headline: "What's Your Location Like?", questions: questions2 },
  { headline: 'How to Access the Property?', questions: questions3 },
  { headline: 'About the Tank?', questions: questions4 },
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
  onClick: () => console.log('goto Qustion2'),
  onClickBack: () => console.log('goto Qustion2')
};
