import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaughBeam, faSmile, faMeh, faFrown, faAngry } from '@fortawesome/free-solid-svg-icons';
import {secondaryDark} from '../helpers/colors';

import {} from '../helpers/timeParser';

import {extractDataByKey} from '../helpers/APIservices'

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:5000';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const style = {
    container:{
        overflowY:'scroll',
        maxHeight: '20rem',
        backgroundColor: secondaryDark,
        color: '#aaaaaa'
    }
}

var intervalCall;

const limit = 20;
const sastisfactionIcon = [faAngry, faFrown, faMeh, faSmile, faLaughBeam];

const Comment = (props) => {
    let d = new Date(props.date);

    return <p> {d.toLocaleString()} <FontAwesomeIcon icon={sastisfactionIcon[props.rated - 1]}/> {props.feedback} </p>
}

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments : []
        }
    }
    componentDidMount(){
        this.update()
        setInterval(this.update, 1000);
    }

    update = () => {
        axios.get(
            'api/v1/dashboard/comment?',
            {
                params:{
                    limit: limit
                },
                headers: { 
                    "x-access-token": localStorage.getItem('token')
                }
            }
        )
        .then(res => res.data.data)
        .then( data => {
            this.setState({comments : data});
            // this.state.comments.map(obj =>  <Comment rated={obj.rated} feedback={obj.comment} />  )
        }
            
        )   
    }

    render() {
        
        return (
            <Container style={style.container}>
                <div style={{position:'absolute', top:0 , background:secondaryDark, width: '90%'}}>
                    <h3> Recent comments </h3>
                </div>
                
                <ListGroup variant="flush"  >
                    {this.state.comments.map(obj => <Comment date={obj.created_at} rated={obj.rated} feedback={obj.comment} /> )}
                </ListGroup>

            </Container>
        )
    }
}