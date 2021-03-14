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
                {[
                    { icon: 'question circle', title: 'Questions', description: 'Answer to the best of your ability.' },
                    { icon: 'dollar', title: 'Review / Complete', description: 'Confirm for accuracy.' },
                    { icon: 'info circle', title: 'Order has been Placed', description: 'For your records' },
                ].map((e, i) => (<Step
                    active={i == props.activeStep}
                    disabled={i > props.activeStep}
                    icon={e['icon']}
                    title={e['title']}
                    description={e['description']}
                />))}
            </Step.Group>
        </Container>
        <Grid columns={2} stackable>
            <Grid.Row columns={2}>
                <Grid.Column width={12}>
                    {props.children}
                    {props.questionIndex !== 0 ?
                        <Button onClick={props.onClickBack}>
                            Back
                        </Button> : null}
                    {true ? null : (
                        <Button onClick={props.onClick}>
                            {props.buttonLabel}
                        </Button>)}
                </Grid.Column>
                <Grid.Column width={4}>
                    {props.right_side}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

export default ResponsiveLayout