import React from 'react'
import Questionaire from '../../../features/questionaire/Questionaire'
import FormExampleSubcomponentControl from '../FormExampleSubcomponentControl/FormExampleSubcomponentControl'
import {
    Button,
    Card,
    Container,
    Feed,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from 'semantic-ui-react'

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginTop: '2em',
        marginBottom: '30px',
    },
}

const ResponsiveLayout = () => (
    <Container>

        <Container style={style.last}>
            <Step.Group fluid>
                <Step icon='plane' title='Shipping' description='Choose your shipping options' />
                <Step active icon='dollar' title='Billing' description='Enter billing information' />
                <Step
                    disabled
                    icon='info circle'
                    title='Confirm Order'
                    description='Verify order details'
                />
            </Step.Group>
        </Container>

        <Grid columns={2} stackable>
            
            <Grid.Row columns={2}>
                <Grid.Column width={12}>
                    <Segment>
                        <Header as='h2'>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor.
                        </p>
                        <FormExampleSubcomponentControl />

                    </Segment>
                    <Segment>
                        <Header as='h2'>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor.
                        </p>
                        <Table singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Registration Date</Table.HeaderCell>
                                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                                    <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>John Lilki</Table.Cell>
                                    <Table.Cell>September 14, 2013</Table.Cell>
                                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie Harington</Table.Cell>
                                    <Table.Cell>January 11, 2014</Table.Cell>
                                    <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill Lewis</Table.Cell>
                                    <Table.Cell>May 11, 2014</Table.Cell>
                                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Table singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Registration Date</Table.HeaderCell>
                                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                                    <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>John Lilki</Table.Cell>
                                    <Table.Cell>September 14, 2013</Table.Cell>
                                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie Harington</Table.Cell>
                                    <Table.Cell>January 11, 2014</Table.Cell>
                                    <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill Lewis</Table.Cell>
                                    <Table.Cell>May 11, 2014</Table.Cell>
                                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    {/* <Segment> */}
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Recent Activity</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label image='/images/avatar/small/jenny.jpg' />
                                    <Feed.Content>
                                        <Feed.Date content='1 day ago' />
                                        <Feed.Summary>
                                            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                            </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>

                                <Feed.Event>
                                    <Feed.Label image='/images/avatar/small/molly.png' />
                                    <Feed.Content>
                                        <Feed.Date content='3 days ago' />
                                        <Feed.Summary>
                                            You added <a>Molly Malone</a> as a friend.
                                            </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>

                                <Feed.Event>
                                    <Feed.Label image='/images/avatar/small/elliot.jpg' />
                                    <Feed.Content>
                                        <Feed.Date content='4 days ago' />
                                        <Feed.Summary>
                                            You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                            </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Card.Content>
                    </Card>

                    {/* </Segment> */}
                    {/* <Segment> */}
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Recent Activity</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label image='/images/avatar/small/jenny.jpg' />
                                    <Feed.Content>
                                        <Feed.Date content='1 day ago' />
                                        <Feed.Summary>
                                            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                            </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>

                                <Feed.Event>
                                    <Feed.Label image='/images/avatar/small/molly.png' />
                                    <Feed.Content>
                                        <Feed.Date content='3 days ago' />
                                        <Feed.Summary>
                                            You added <a>Molly Malone</a> as a friend.
                                            </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>

                                <Feed.Event>
                                    <Feed.Label image='/images/avatar/small/elliot.jpg' />
                                    <Feed.Content>
                                        <Feed.Date content='4 days ago' />
                                        <Feed.Summary>
                                            You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                            </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Card.Content>
                    </Card>

                    {/* </Segment> */}
                </Grid.Column>

            </Grid.Row>

        </Grid>
    </Container>
)

export default ResponsiveLayout