import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
// import { fetchCollections, removeCollectionRequest, markCollectionAsActiveRequest } from '../../../redux'
// import { createTodo } from './redux/actions'
import { addTodoRequest } from './redux/thunks';
import { load } from "../invoice/redux/thunks";
// import OrderForm from "../../components/orderform/OrderForm";
import Layout from '../../components/semantic_ui/ResponsiveLayout/Layout1';
import OrdersTable from '../../components/DynamicTable/DynamicTable';
import Invoice from '../../components/invoice/Invoice';
import {
    Grid,
    Header,
    Label,
    Segment,
    Icon,
    Image,
    Button
} from 'semantic-ui-react'

const consolidateQIndexes = (data) => {
    let results = {}
    Object.keys(data).forEach((prop) => {
        if (results.hasOwnProperty(data[prop].qIndex) === false) { results[data[prop].qIndex] = [] }
        results[data[prop].qIndex].push({ question: prop, answer: data[prop].answer })
        console.log('results:', results)
    })
    return results
}

const displayResults = (results, resultsDisplay) => {
    (Object.keys(results).forEach((prop) => {
        resultsDisplay.push(<><hr /><h3>{prop}</h3></>)
        results[prop] && results[prop].map((e, i) => {
            resultsDisplay.push(<p>
                {/* <Icon name='question circle' /> */}
                <b>
                    {/* #{i + 1}: */}
                    {e.question}</b><br />{e.answer}</p>)
        })
    }))
}

function OrdersDisplay(props) {

    const resultsDisplay = []
    const results = consolidateQIndexes(props.customeranswers.data)
    displayResults(results, resultsDisplay)

    const resultsDisplay2 = []
    const results2 = consolidateQIndexes(props.profile.data)
    displayResults(results2, resultsDisplay2)

    const resultsDisplay3 = []
    const results3 = consolidateQIndexes(props.register.data)
    displayResults(results3, resultsDisplay3)

    const right_side = () => {
        // return null
        return (<Segment>
            <span>
                <Link to='/register'>
                    {/* <Label style={{ float: 'right' }}> */}
                        <Icon name='edit' style={{ float: 'right' }}/>
                    {/* </Label> */}
                </Link>
            </span>
            <span><Header as='h2'><Icon name='registered' />Registered</Header></span>
            {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p> */}
            {/* {
                (Object.keys(results3).forEach((prop) => {
                    resultsDisplay3.push(<><hr /><h4>{prop}</h4></>)
                    results3[prop] && results3[prop].map((e, i) => { resultsDisplay3.push(<p><strong>{e.question}</strong><br />{e.answer}</p>) })
                }))
            } */}
            {resultsDisplay3}
        </Segment>
        )
    }
    return (
        <Layout {...props} right_side={right_side()} >
            <Segment>
                <span>
                    <Link to='/profile'>
                        {/* <Label style={{ float: 'right' }}> */}
                            <Icon name='edit' style={{ float: 'right' }}/>
                        {/* </Label> */}
                    </Link>


                </span>
                <span><Header as='h2'><Image src='/images/avatar/small/elliot.jpg' size='medium' circular />Your Information</Header></span>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p> */}
                {/* {
                    (Object.keys(results2).forEach((prop) => {
                        resultsDisplay2.push(<><hr /><h3>{prop}</h3></>)
                        results2[prop] && results2[prop].map((e, i) => { resultsDisplay2.push(<p><strong>{e.question}</strong><br />{e.answer}</p>) })

                    }))
                } */}
                {resultsDisplay2}
            </Segment>

            <Segment>
                <span>
                    <Link to='/questionaire2'>
                        {/* <Label style={{ float: 'right' }}> */}
                            <Icon name='edit'style={{ float: 'right' }} />
                        {/* </Label> */}
                    </Link><Link to='/questionaire'>
                        {/* <Label style={{ float: 'right' }}> */}
                            <Icon name='edit' style={{ float: 'right' }}/>
                        {/* </Label> */}
                    </Link></span>
                <span><Header as='h2'><Icon name='question circle' />Your Answers</Header></span>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p> */}
                {/* {
                    (Object.keys(results).forEach((prop) => {
                        resultsDisplay.push(<><hr /><h4>{prop}</h4></>)
                        results[prop] && results[prop].map((e, i) => { resultsDisplay.push(<p><Icon name='question circle' /><strong>#{i + 1}: {e.question}</strong><br />{e.answer}</p>) })
                    }))
                } */}

                {resultsDisplay}
                {/* {props.customeranswers ? displayResults(props.customeranswers.data): []} */}
            </Segment>
            <Segment>
                <Header as='h2'><Icon name='unordered list' />Orders</Header>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id sed enim modi non est minima itaque necessitatibus, possimus vero, omnis laborum distinctio odit nihil fuga. Ratione accusamus aliquid repellendus!
                </p> */}
                <OrdersTable data={props.orders.data} />
                {/* <Button onClick={() => {
                    console.log('Pressed')
                    props.addTodoRequest({ id: 'test' })
                }}>Press</Button> */}
            </Segment>
            <Segment>
                <Invoice {...props} />
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
        register: state.register,
        invoices: state.invoices
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoRequest: (obj) => dispatch(addTodoRequest(obj)),
        loadInvoices: (obj) => dispatch(load(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersDisplay)
