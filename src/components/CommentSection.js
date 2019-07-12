import React, { Component } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faSmile, faMeh, faFrown, faAngry } from '@fortawesome/free-solid-svg-icons';
import { secondaryDark, mainLight } from '../helpers/colors';
import { Alert } from 'react-bootstrap';
import { NODATA, UNAUTHORIZED } from '../redux/actions/types';


import { } from '../helpers/timeParser';

import axios from 'axios';
axios.defaults.baseURL = 'https://nk-asp.herokuapp.com';


const style = {
    container: {
        overflowY: 'scroll',
        maxHeight: '20rem',
        backgroundColor: secondaryDark,
        color: '#aaaaaa'
    }
}

var updateInterval;

const limit = 20;
const sastisfactionIcon = [faAngry, faFrown, faMeh, faSmile, faLaughBeam];

const Comment = (props) => {
    let d = new Date(props.date);

    return <p > {d.toLocaleString()} <FontAwesomeIcon icon={sastisfactionIcon[props.rated - 1]} /> {props.feedback} </p>
}

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataError: '',
            comments: []
        }
    }
    componentDidMount() {
        this.update()
        updateInterval = setInterval(this.update, 2000);

    }

    update = () => {

        axios.get(
            'api/dashboard/comment?',
            {
                params: {
                    limit: limit
                },
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
            .then(res => res.data.data)
            .then(data => {
                this.setState({ comments: data });
                // this.state.comments.map(obj =>  <Comment rated={obj.rated} feedback={obj.comment} />  )
                if (data.length === 0)
                    this.setState({
                        dataError: NODATA
                    })
                else
                    this.setState({
                        dataError: ''
                    })
            })
            .catch(err => {
                if(err.response && err.response.status === 403){
                    this.setState({
                        dataError: UNAUTHORIZED
                    })
                }
            })
    }

    componentWillUnmount() {
        if (updateInterval)
            clearInterval(updateInterval)
    }
    render() {

        return (
            <Container >
                <Row>
                    <div style={{ position: 'sticky', top: 0, background: secondaryDark, width: '90%', height: '10%', color: mainLight }}>
                        <h3> Recent comments </h3>
                    </div>
                </Row>
                <Row style={{ ...style.container, maxHeight: '30vw' }}>
                        {
                            this.state.dataError === UNAUTHORIZED &&
                            <Alert variant="danger">
                                Couldn't retrieve data from sever. Make sure your account is admin account!
                            </Alert>
                        }
                        {
                            this.state.dataError === NODATA ?
                            <Alert variant="secondary" style={{width:'100%'}}>
                                <h2>
                                Data is empty!
                                </h2>
                            </Alert> :
                            <ListGroup variant='flush' >
                            {this.state.comments.map((obj, ind) => <Comment date={obj.created_at} rated={obj.rated} feedback={obj.comment} key={ind} />)}
                            </ListGroup>
                        }
                </Row>
            </Container>
        )
    }
}