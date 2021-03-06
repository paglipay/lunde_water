import React from 'react'
import {
    Button,
    Card,
    Container,
    Feed,
    Grid,
    Header,
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

const ResponsiveLayout = (props) => (
    <Container>

        <Container style={style.last}>
            <Step.Group fluid>
                <Step active icon='question circle' title='Questions' description='Answer to the best of your ability.' />
                <Step disabled icon='dollar' title='Review / Complete' description='Confirm for accuracy.' />
                <Step
                    disabled
                    icon='info circle'
                    title='Order has been Placed'
                    description='For your records'
                />
            </Step.Group>
        </Container>

        <Grid columns={2} stackable>
            <Grid.Row columns={2}>
                <Grid.Column width={12}>
                    <Segment>
                        <Header as='h2'>{props.headline}</Header>
                        {/* <p>
                        {props.topLine}
                        </p> */}
                        {props.children}
                        {props.questionIndex !== 0 ?
                        <Button onClick={props.onClickBack}>
                            Back
                        </Button>:null}
                        {false?null:(
                        <Button onClick={props.onClick}>
                            {props.buttonLabel}
                        </Button>)}
                    </Segment>                    
                </Grid.Column>
                <Grid.Column width={4}>
                    {/* <Segment> */}
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Recent Activity</Card.Header>
                        </Card.Content>
                        <Card.Content>
                        {props.right_side} 
                            {/* <Feed>
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
                            </Feed> */}
                        </Card.Content>
                    </Card>
                    {/* </Segment> */}                    
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

export default ResponsiveLayout