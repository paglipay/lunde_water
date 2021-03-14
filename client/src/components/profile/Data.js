
const questions = [
  {
    question: 'Full Name', type: "text", id: "fullname"
  },
  {
    question: 'Email', type: "text", id: "email"
  },
  {
    question: 'Phone Number', type: "text", id: "phone"
  },
  {
    question: 'Street Address', type: "text", id: "address"
  },
  {
    question: 'Street Address2', type: "text", id: "address2"
  },
  {
    question: 'City', type: "text", id: "city"
  },
  {
    question: 'State', type: "text", id: "state"
  },
  {
    question: 'Zip Code', type: "text", id: "zip_code"
  }
]
const questions2 = [
  {
    question: 'Height', type: "text", id: "height"
  },
  {
    question: 'Weight', type: "text", id: "weight"
  },
  {
    question: 'Gender', type: "select", id: "gender", 
    options: [
      { value: 'Male', id: 'male' },
      { value: 'Female', id: 'female' },
      { value: 'Other', id: 'other' }
    ]
  },
  {
    question: 'Please Specify', type: "textarea", id: "specify", condition: { property: "Gender", value: ['other'] }
  }
]
const questions3 = [
  {
    question: 'Hobbies', type: "text", id: "hobbies"
  },
  {
    question: 'Talents', type: "text", id: "talents"
  },
  {
    question: 'Favorites', type: "text", id: "favorites"
  },
]

export const questions_arry = [
  { headline: 'Your Profile', questions: questions },
  // { headline: 'Your More Personal Stuff', questions: questions2 },
  // { headline: 'Extra', questions: questions3 }
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
