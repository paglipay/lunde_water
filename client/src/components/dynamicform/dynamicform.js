import { Form } from 'react-bootstrap';
import {
  Button,
  Card,
  Image,
  Icon
} from 'semantic-ui-react'

import DTF from '../DynamicTable/DynamicTableForm'

// const isValidZip = (zip) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);

const CardExampleCard = () => (
  <Card>
    <Image src='/images/avatar/large/elliot.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
        </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
          22 Friends
        </a>
    </Card.Content>
  </Card>
)

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
            </Button>
          <Button basic color='red'>
            Decline
            </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/molly.png'
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
            </Button>
          <Button basic color='red'>
            Decline
            </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
          </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
            </Button>
          <Button basic color='red'>
            Decline
            </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)


export const dynamicForm = (questions, setPostData, postData, qIndex, id:q.id = 0, elRefs) => <>
  <Form>
    {questions.map((q, i) => {
      if (q.hasOwnProperty('condition') === false || postData.hasOwnProperty(q.condition.property) &&
        postData[q.condition.property].hasOwnProperty('answer') &&
        q.condition.value.includes(postData[q.condition.property].answer)) {
        if (q.type === 'y/n') {
          return (<>
            <Form.Group controlId={`formBasicUsername${i}`}>
              <Form.Label>{q.question} </Form.Label>
              <Form.Check onChange={(e) => {
                console.log(e.target.name, e.target.value)
                setPostData({ ...postData, [e.target.name]: { answer: "Yes", qIndex, id:q.id } })
              }}
                name={`${q.question}`}
                key={`${q.question}_yes`}
                type="radio"
                id={`default-radio`}
                label={`Yes`}
              />

              <Form.Check onChange={(e) => {
                console.log(e.target.name, e.target.value)
                setPostData({ ...postData, [e.target.name]: { answer: "No", qIndex, id:q.id } })
              }}
                name={`${q.question}`}
                key={`${q.question}_no`}
                type="radio"
                label={`No`}
                id={`default-radio`}
              />

              <Form.Text className="">
                Please enter a memorable answer.
                            </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'select') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label>{q.question} </Form.Label>
              <Form.Control  as="select" name={q.question} onChange={(e) => {
                console.log(e.target.name, e.target.value)
                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
              }}>
                <option>Default select</option>
                {q.options.map(e => <option value={e.id}>{e.value}</option>)}
              </Form.Control>
              <Form.Text className="">
                Please enter a memorable answer.
                            </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'select_cards') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label>{q.question} </Form.Label>

              {q.options.map(e => CardExampleGroups())}

              <Form.Text className="">
                Please enter a memorable answer.
                            </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'message') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label><h2>{q.question}</h2></Form.Label>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'button') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Button onClick={(e) => {
                e.preventDefault()
                q.onClick()
              }
              }>{q.name}</Button>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'dtf') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label><h2>{q.question}</h2></Form.Label>
              <DTF />
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'week') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label>{q.question} </Form.Label>
              <Form.Control  onChange={(e) => {
                console.log(e.target.name, e.target.value)
                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
              }} name={q.question} type="week" placeholder="Enter Day of Week" />
              <Form.Text className="">
                Please enter a memorable answer.
                            </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'datetime') {
          return (<>
            <Form.Label>{q.question} </Form.Label>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <br />
              <span style={{ float: 'left' }}>
                <Form.Control style={{ float: 'left' }} onChange={(e) => {
                  console.log(e.target.name, e.target.value)
                  setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
                }} name={q.question} type="date" placeholder="Enter Date" />
              </span>
              <span style={{ float: 'left' }}>
                <Form.Control style={{ float: 'left' }} onChange={(e) => {
                  console.log(e.target.name, e.target.value)

                  setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
                }} name={q.question} type="time" placeholder="Enter Date" />
              </span>
              <Form.Text className="">
                <br />
              </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'date') {
          return (<>
            <Form.Label>{q.question} </Form.Label>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <br />
              <span style={{ float: 'left' }}>
                <Form.Control style={{ float: 'left' }} onChange={(e) => {
                  console.log(e.target.name, e.target.value)
                  setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
                }} name={q.question} type="date" placeholder="Enter Date" />
              </span>
              <Form.Text className="">
                <br />
              </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'time') {
          return (<>
            <Form.Label>{q.question} </Form.Label>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <br />
              <span style={{ float: 'left' }}>
                <Form.Control style={{ float: 'left' }} onChange={(e) => {
                  console.log(e.target.name, e.target.value)

                  setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
                }} name={q.question} type="time" placeholder="Enter Date" />
              </span>
              <Form.Text className="">
                <br />
              </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'text') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label>{q.question} </Form.Label>
              <Form.Control onChange={(e) => {
                console.log(e.target.name, e.target.value)
                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
              }} name={q.question} key={q.question} type="text" placeholder="Enter Text" value={postData[q.question] ? (postData[q.question].answer ? postData[q.question].answer : null): null } />
              <Form.Text className="">
                Please enter a memorable answer.
                            </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else if (q.type === 'pass') {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label>{q.question} </Form.Label>
              <Form.Control onChange={(e) => {
                console.log(e.target.name, e.target.value)
                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
              }} name={q.question} key={q.question} type="password" placeholder="Enter Text" />
              <Form.Text className="">
                Please enter a memorable answer.
                            </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
        else {
          return (<>
            <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
              <Form.Label>{q.question} </Form.Label>
              <Form.Control  onChange={(e) => {
                console.log(e.target.name, e.target.value)
                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex, id:q.id } })
              }} name={q.question} as="textarea" rows={4} 
              value={postData[q.question] ? (postData[q.question].answer ? postData[q.question].answer : null): null } />
              <Form.Text className="">
                Please enter a memorable answer.
                            </Form.Text>
            </Form.Group>
            <br />
          </>)
        }
      }
    })}
  </Form>
</>