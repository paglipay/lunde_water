
const questions = [
  { question: 'What is your Zip Code?', type: "text", id: "zip_code" },
  {
    question: 'You are within our Zone!!!', type: "message",
    condition: { property: "What is your Zip Code?", value: ['91387', '93550', '93551', '93552', '93535', '93543'] }
  },
  {
    question: 'Create a Username', type: "text", id: "username",
    condition: { property: "What is your Zip Code?", value: ['91387', '93550', '93551', '93552', '93535', '93543'] }
  },
  {
    question: 'Add your Email', type: "text", id: "email",
    condition: { property: "What is your Zip Code?", value: ['91387', '93550', '93551', '93552', '93535', '93543'] }
  },
  {
    question: 'Create a Password', type: "pass", id: "password",
    condition: { property: "What is your Zip Code?", value: ['91387', '93550', '93551', '93552', '93535', '93543'] }
  },
  {
    question: 'Renter your Password', type: "pass", id: "password2",
    condition: { property: "What is your Zip Code?", value: ['91387', '93550', '93551', '93552', '93535', '93543'] }
  },

]

export const questions_arry = [
  { headline: 'Are you within our Zone?', questions: questions }
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
