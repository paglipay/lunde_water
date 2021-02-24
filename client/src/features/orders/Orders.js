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
    Icon
} from 'semantic-ui-react'
function OrdersDisplay(props) {
    const results = []
    Object.keys(props.customeranswers.data).forEach((prop) => results.push({ question: prop, answer: props.customeranswers.data[prop] }))

    return (
        <Layout {...props}>
            <Segment>
                <Header as='h2'>Your Answers</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                {results && results.map((e, i) => <p><Icon name='question circle' /><strong>#{i+1}: {e.question}</strong><br/>{e.answer}</p>)}
            </Segment>
            <Segment>
                <Header as='h2'>Orders</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p>
                <OrdersTable data={props.orders.data} />
                <button onClick={() => {
                    console.log('Pressed')
                    props.addTodoRequest({ id: 'test' })
                }}>Press</button>
            </Segment>
        </Layout>

    );
}

// export default Orders;

const mapStateToProps = state => {
    return {
        orders: state.orders,
        customeranswers: state.customeranswers
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
