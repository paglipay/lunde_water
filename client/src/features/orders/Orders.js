import React, { useEffect, useState } from "react";
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
    const results = []
    Object.keys(props.customeranswers.data).forEach((prop) => results.push({ question: prop, answer: props.customeranswers.data[prop] }))
    const results2 = []
    Object.keys(props.profile.data).forEach((prop) => results2.push({ question: prop, answer: props.profile.data[prop] }))
    const results3 = []
    Object.keys(props.register.data).forEach((prop) => results3.push({ question: prop, answer: props.register.data[prop] }))

    return (
        <Layout {...props}>
            <Segment>
                <Header as='h2'><Icon name='registered' />Register</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                {results3 && results3.map((e, i) => <p><strong>#{i + 1}: {e.question}</strong><br />{e.answer}</p>)}
            </Segment>
            <Segment>
                <Header as='h2'><Image src='/images/avatar/small/elliot.jpg' size='medium' circular />Your Profile</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                {results2 && results2.map((e, i) => <p><strong>#{i + 1}: {e.question}</strong><br />{e.answer}</p>)}
            </Segment>

            <Segment>
                <Header as='h2'><Icon name='question circle' />Your Answers</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                {results && results.map((e, i) => <p><Icon name='question circle' /><strong>#{i + 1}: {e.question}</strong><br />{e.answer}</p>)}
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
