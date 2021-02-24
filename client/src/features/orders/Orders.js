import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
// import { fetchCollections, removeCollectionRequest, markCollectionAsActiveRequest } from '../../../redux'
// import { createTodo } from './redux/actions'
import { addTodoRequest } from './redux/thunks'
// import OrderForm from "../../components/orderform/OrderForm";
import Layout from '../../components/semantic_ui/ResponsiveLayout/Layout1';
import OrdersTable from '../../components/DynamicTable/DynamicTable';
import {
    Header,
    Segment,
    Icon,
    Image,
    Button
} from 'semantic-ui-react'
function OrdersDisplay(props) {
    let results = {}
    const resultsDisplay = []
    Object.keys(props.customeranswers.data).forEach((prop) => {
        if (results.hasOwnProperty(props.customeranswers.data[prop].qIndex) === false) { results[props.customeranswers.data[prop].qIndex] = [] }
        results[props.customeranswers.data[prop].qIndex].push({ question: prop, answer: props.customeranswers.data[prop].answer })
        console.log('results:', results)
    })

    let results2 = {}
    const resultsDisplay2 = []
    Object.keys(props.profile.data).forEach((prop) => {
        if (results2.hasOwnProperty(props.profile.data[prop].qIndex) === false) { results2[props.profile.data[prop].qIndex] = [] }
        results2[props.profile.data[prop].qIndex].push({ question: prop, answer: props.profile.data[prop].answer })

    })
    let results3 = {}
    const resultsDisplay3 = []
    Object.keys(props.register.data).forEach((prop) => {
        if (results3.hasOwnProperty(props.register.data[prop].qIndex) === false) { results3[props.register.data[prop].qIndex] = [] }
        results3[props.register.data[prop].qIndex].push({ question: prop, answer: props.register.data[prop].answer })

    })
    // const results2 = []
    // Object.keys(props.profile.data).forEach((prop) => results2.push({ question: prop, answer: props.profile.data[prop] }))
    // const results3 = []
    // Object.keys(props.register.data).forEach((prop) => results3.push({ question: prop, answer: props.register.data[prop] }))

    const right_side = () => {
        // return null
        return (<Segment>
            <Header as='h2'><Icon name='registered' />Register</Header><Link to='/register'><Icon style={{float:'right'}}  name='edit' /></Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
                {
                    (Object.keys(results3).forEach((prop) => {
                        resultsDisplay3.push(<><hr/><h4>{prop}</h4></>)
                        results3[prop] && results3[prop].map((e, i) => { resultsDisplay3.push(<p><Icon name='question circle' /><strong>#{i + 1}: {e.question}</strong><br />{e.answer}</p>) })
                    }))
                }
                {resultsDisplay3}
        </Segment>
        )
    }
    return (
        <Layout {...props} right_side={right_side()} >
            <Segment>
                <Header as='h2'><Image src='/images/avatar/small/elliot.jpg' size='medium' circular />Your Information</Header><Link to='/profile'><Icon style={{float:'right'}}  name='edit' /></Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                {
                    (Object.keys(results2).forEach((prop) => {
                        resultsDisplay2.push(<><hr/><h4>{prop}</h4></>)
                        results2[prop] && results2[prop].map((e, i) => { resultsDisplay2.push(<p><Icon name='question circle' /><strong>#{i + 1}: {e.question}</strong><br />{e.answer}</p>) })
                    }))
                }
                {resultsDisplay2}
            </Segment>

            <Segment>
                <Header as='h2'><Icon name='question circle' />Your Answers</Header><Link to='/questionaire2'><Icon style={{ float: 'right' }} name='edit' /></Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                {
                    (Object.keys(results).forEach((prop) => {
                        resultsDisplay.push(<><hr/><h4>{prop}</h4></>)
                        results[prop] && results[prop].map((e, i) => { resultsDisplay.push(<p><Icon name='question circle' /><strong>#{i + 1}: {e.question}</strong><br />{e.answer}</p>) })
                    }))
                }
                {resultsDisplay}
            </Segment>
            <Segment>
                <Header as='h2'><Icon name='unordered list' />Orders</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                <OrdersTable data={props.orders.data} />
                <Button onClick={() => {
                    console.log('Pressed')
                    props.addTodoRequest({ id: 'test' })
                }}>Press</Button>
            </Segment>
        </Layout>

    );
}

// export default Orders;

const mapStateToProps = state => {
    return {
        orders: state.orders,
        customeranswers: state.customeranswers,
        profile: state.profile,
        register: state.register
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoRequest: (obj) => dispatch(addTodoRequest(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersDisplay)
