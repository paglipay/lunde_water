import { questions_arry as q1 } from '../register/Data'
import { questions_arry as q2 } from '../profile/Data'
import { questions_arry as q3 } from '../CustomerQuestions/QuestionsData'
import { questions_arry as q4 } from '../orderform/FormData'


export const questions_keys = ['register', 'profile', 'customer_questions', 'order_form']
export const array_of_questions_arry = [q1, q2, q3, q4]

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
