import React from 'react';
import { Alert } from 'react-bootstrap';

export const AlertError = (props) => (
    props.display &&
    <Alert variant="danger" show={true} dismissible onClose={props.onClose} >
        <Alert.Heading>{props.heading}</Alert.Heading>
        <p>{props.text}</p>
    </Alert>

)

export const AlertSucceed = (props) => (
    props.display &&
    <Alert variant="success" show={props.display} dismissible onClose={props.onClose} >
        <Alert.Heading>{props.heading}</Alert.Heading>
        <p>{props.text}</p>
    </Alert>
)