import { questions_arry as q1 } from '../../components/profile/Data'
import { questions_arry as q2 } from '../../components/CustomerQuestions/QuestionsData'
import { questions_arry as q3 } from '../../components/orderform/FormData'
import { questions_arry as q4 } from '../../components/DynamicQuestions/Submit/Data'

export const questions_keys = [
  'Profile', 'Customer Questions', 
'Orders',
'Submit'
]
export const array_of_questions_arry = [
  q1, q2, 
  q3,
  q4
]

export const homeObjOne = {
  topLine: 'New Customer Questions',
  headline: 'Please Answer Questions',
  description: 'TEST DESCRIPTION',
  buttonLabel: 'Next',
  onClick: () => console.log('goto Qustion2'),
  onClickBack: () => console.log('goto Qustion2')
};
