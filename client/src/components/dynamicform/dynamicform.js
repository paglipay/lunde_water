import { Form } from 'react-bootstrap';

export const dynamicForm = (questions, setPostData, postData) => <>
    <Form>
        {questions.map((q, i) => {
            if (q.hasOwnProperty('condition') === false ||  q.condition.value.includes(postData[q.condition.property])) {
                if (q.type === 'y/n') {
                    return (<>
                        <Form.Group controlId={`formBasicUsername${i}`}>
                            <Form.Label>{q.question} </Form.Label>

                            <Form.Check onChange={(e) => {
                                console.log(e.target.name, e.target.value)
                                setPostData({ ...postData, [e.target.name]: "Yes" })
                            }}
                                name={`${q.question}`}
                                key={`${q.question}_yes`}
                                type="radio"
                                id={`default-radio`}
                                label={`Yes`}
                            />

                            <Form.Check onChange={(e) => {
                                console.log(e.target.name, e.target.value)
                                setPostData({ ...postData, [e.target.name]: "No" })
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
                else if (q.type === 'week') {
                    return (<>
                        <Form.Group controlId={`formBasicUsername${q.question}${i}`}>
                            <Form.Label>{q.question} </Form.Label>
                            <Form.Control onChange={(e) => {
                                console.log(e.target.name, e.target.value)
                                setPostData({ ...postData, [e.target.name]: e.target.value })
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

                                setPostData({ ...postData, [e.target.name]: e.target.value })
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
                                setPostData({ ...postData, [e.target.name]: e.target.value })
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
                                setPostData({ ...postData, [e.target.name]: e.target.value })
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
                                setPostData({ ...postData, [e.target.name]: e.target.value })
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