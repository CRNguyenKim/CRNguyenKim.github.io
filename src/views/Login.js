import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { mainLight, secondaryDark, mainDark } from '../helpers/colors';
import {ERRORS_HEADING, returnError, clearMessages} from '../redux/actions/error'
import { AlertError } from '../components/Alerts'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import store from '../redux/store';
import {login} from '../redux/actions/auth'


const style = {
    responsive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    brand: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 80,
        color: '#aaaaaa',
        fontFamily: 'Quantico',
        background: secondaryDark,
        margin: '10px 20% 10px 20%',

    },
    text:{
        color:'#dddddd'
    }
}


class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount(){
        this.setState({isAuthenticated: this.props.isAuthenticated})
    }

    render(props) {
        return (
            this.props.isAuthenticated ?
            <Redirect to='/'></Redirect>
            :
            <Container>
                <Row style={style.responsive}>
                    <Col xs={10} sm={10} md={12} lg={8} xl={8} style={{...style.brand}}>
                        <h5 style={{ fontSize: '3vw', color: mainLight, whiteSpace:'nowrap' }}>NGUYENKIM RATING DASHBOARD</h5>
                    </Col>
                </Row>
                
                <Row style={style.responsive}>
                
                    <Col xs={10} sm={10} md={12} lg={8} xl={8} style={{background:secondaryDark,  padding: '5%'}}>
                        <AlertError display={ERRORS_HEADING.loginFailed in this.props.messages.error} onClose={() => { store.dispatch(clearMessages()) }}  
                                    heading={ERRORS_HEADING.loginFailed} 
                                    text={ this.props.messages.error ? this.props.messages.error[ERRORS_HEADING.loginFailed] : {}} />
                        <AlertError display={ERRORS_HEADING.severError in this.props.messages.error} onClose={() => { store.dispatch(clearMessages()) }}  
                                    heading={ERRORS_HEADING.severError} 
                                    text={ this.props.messages.error ? this.props.messages.error[ERRORS_HEADING.severError] : {}} />
                        <Form fullWidth>
                        <h1 style={{color:'#dddddd'}}>Login</h1>
                            <Form.Group controlId="formBasicEmail" lg>
                                <Form.Label style={style.text}>Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="admin" 
                                    size="lg" 
                                    style={{backgroundColor: secondaryDark, color:'#ffffff'}}
                                    value={this.state.username}
                                    onChange={(e) => this.setState({username: e.target.value})}
                                    />
                                <Form.Text className="text-muted" >
                                    Admin login only!
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" lg>
                                <Form.Label style={style.text}>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="password" 
                                    size="lg" 
                                    style={{backgroundColor: secondaryDark, color:'#ffffff'}}
                                    value={this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                    />
                            </Form.Group>

                            <Button variant="info" type="button" onClick={() => store.dispatch(login(this.state.username, this.state.password))} >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated,
        messages: state.messages
    }
)

export default connect(mapStateToProps)(Index);