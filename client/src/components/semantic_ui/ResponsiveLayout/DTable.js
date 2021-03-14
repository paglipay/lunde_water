import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Segment,
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

const DTable = (props) => (
    <Container>
        <Grid columns={1} stackable>
            <Grid.Row columns={1}>
                {true && <Grid.Column width={16}>
                    <Segment >
                        <Header as='h2'>{props.headline}</Header>
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

export default DTable