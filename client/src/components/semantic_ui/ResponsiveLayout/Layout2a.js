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
                <Grid.Column width={6}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Review / Complete</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            {props.right_side}
                        </Card.Content>
                    </Card>
                </Grid.Column>
                {true && <Grid.Column width={10}>
                    <Segment >
                        <Header as='h2'>{props.headline}</Header>
                        {/* <p>
                                {props.topLine}
                                </p> */}
                        {props.children}
                        {props.questionIndex !== 0 ?
                            <Button onClick={props.onClickBack}>
                                Back
                                    </Button> : null}
                        {props.questions_keys.length - 1 == props.qIndex ? null : (
                            <Button onClick={props.onClick}>
                                {props.buttonLabel}
                            </Button>)}
                    </Segment>
                </Grid.Column>}
            </Grid.Row>
        </Grid>
    </Container>
)

export default ResponsiveLayout