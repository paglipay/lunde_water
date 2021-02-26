import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
// import { fetchCollections, removeCollectionRequest, markCollectionAsActiveRequest } from '../../../redux'
// import { createTodo } from './redux/actions'
// import { addTodoRequest } from './redux/thunks'
// import OrderForm from "../../components/orderform/OrderForm";
import Layout from '../../components/semantic_ui/ResponsiveLayout/Layout1';
// import ServicesTable from '../../components/DynamicTable/DynamicTable';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const extra = (
    <a>
        <Icon name='user' />
    16 Friends
    </a>
)
function ServicesDisplay(props) {

    console.log('props.customeranswers.data: ', props.customeranswers.data)
    let result = ''
    Object.keys(props.customeranswers.data).forEach((prop) => { result = result + '\n\n\nQuestion:\n' + prop + '\n\nYour Answer:\n' + props.customeranswers.data[prop] })

    return (
        <Layout {...props}>
<Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
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
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
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
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
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
        </Layout>

    );
}

// export default Services;

const mapStateToProps = state => {
    return {
        Services: state.Services,
        customeranswers: state.customeranswers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // addTodoRequest: (obj) => dispatch(addTodoRequest(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServicesDisplay)
