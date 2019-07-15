import React, { Component } from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faSmile, faMeh, faFrown, faAngry } from '@fortawesome/free-solid-svg-icons';
import { secondaryDark, mainLight } from '../helpers/colors';
import { Alert } from 'react-bootstrap';
import {  ratingColors, ratingWords, baseURL } from '../helpers/config';
import propTypes from 'prop-types';
import { NODATA, UNAUTHORIZED } from '../redux/actions/types';
import axios from 'axios';
axios.defaults.baseURL = baseURL;


const style = {
    container: {
        overflowY: 'scroll',
        maxHeight: '20rem',
        backgroundColor: secondaryDark,
        color: '#aaaaaa'
    }
}




const sastisfactionIcon = [faAngry, faFrown, faMeh, faSmile, faLaughBeam];

const Comment = (props) => {
    let d = new Date(props.date);

    return <p > {d.toLocaleString()} <FontAwesomeIcon style={{color: ratingColors[props.rated-1]}}icon={sastisfactionIcon[props.rated - 1]} />
     <span style={{color: ratingColors[props.rated-1]}}> ({ratingWords[props.rated-1]} ) {props.feedback} </span>
     </p>
}

export default class Index extends Component {
    static propTypes = {
        limitComment : propTypes.number
    }
    static defaultProps = {
        limitComment : 20
    }

    constructor(props) {
        super(props);
        this.state = {
            dataError: '',
            comments: []
        }
    }
    componentDidMount() {
        this.update()
        this._updateInterval = setInterval(this.update, 2000);

    }

    update = () => {

        axios.get(
            'api/dashboard/comment?',
            {
                params: {
                    limit: this.props.limitComment
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
        if (this._updateInterval)
            clearInterval(this._updateInterval)
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