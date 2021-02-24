import { Form } from 'react-bootstrap';
import {
    Icon
} from 'semantic-ui-react'
export const dynamicForm = (questions, setPostData, postData, qIndex = 0) => <>
    <Form>
        {questions.map((q, i) => {
            if (q.hasOwnProperty('condition') === false || postData.hasOwnProperty(q.condition.property) && postData[q.condition.property].hasOwnProperty('answer') && q.condition.value.includes(postData[q.condition.property].answer)) {
                if (q.type === 'y/n') {
                    return (<>
                        <Form.Group controlId={`formBasicUsername${i}`}>
                            <Form.Label>{q.question} </Form.Label>

                            <Form.Check onChange={(e) => {
                                console.log(e.target.name, e.target.value)
                                setPostData({ ...postData, [e.target.name]: { answer: "Yes", qIndex } })
                            }}
                                name={`${q.question}`}
                                key={`${q.question}_yes`}
                                type="radio"
                                id={`default-radio`}
                                label={`Yes`}
                            />

                            <Form.Check onChange={(e) => {
                                console.log(e.target.name, e.target.value)
                                setPostData({ ...postData, [e.target.name]: { answer: "No", qIndex } })
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
                else if (q.type === 'message') {
                    return (<>
                        <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
                            <Form.Label><h2>{q.question}</h2></Form.Label>
                        </Form.Group>
                        <br />
                    </>)
                }
                else if (q.type === 'week') {
                    return (<>
                        <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
                            <Form.Label>{q.question} </Form.Label>
                            <Form.Control onChange={(e) => {
                                console.log(e.target.name, e.target.value)
                                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex } })
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
                        <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
                            <Form.Label>{q.question} </Form.Label>
                            <Form.Control onChange={(e) => {
                                console.log(e.target.name, e.target.value)

                                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex } })
                            }} name={q.question} type="time" placeholder="Enter Date" />
                            <Form.Text className="">
                                Please enter a memorable answer.
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
                                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex } })
                            }} name={q.question} key={q.question} type="text" placeholder="Enter Text" />
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
                                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex } })
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
                            <Form.Control onChange={(e) => {
                                console.log(e.target.name, e.target.value)
                                setPostData({ ...postData, [e.target.name]: { answer: e.target.value, qIndex } })
                            }} name={q.question} as="textarea" rows={4} />
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