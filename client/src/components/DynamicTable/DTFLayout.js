import React from 'react'
import {
    Button,
    Container,
    Header,
} from 'semantic-ui-react'


const DTFLayout = (props) => (
    <>
        <Header as='h2'>{props.headline}</Header>
        {/* <p>
                        {props.topLine}
                        </p> */}
        {props.children}
        {props.questionIndex !== 0 ?
            <Button onClick={props.onClickBack}>
                Back
            </Button> : null}
        {false ? null : (
            <Button onClick={props.onClick}>
                {props.buttonLabel}
            </Button>)}
    </>
)

export default DTFLayout