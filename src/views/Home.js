import React from 'react';
import { Col, Row, Container, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
// Charts
import PercentageChart from '../components/circleChart';
import LineChart from '../components/generalChart';
import ColumnChart from '../components/columnChart';
import CommentSection from '../components/CommentSection';


import { mainDark, secondaryDark, mainLight } from '../helpers/colors';
import { Redirect } from 'react-router-dom';

import store from '../redux/store';
import { logout } from '../redux/actions/auth'

import axios from 'axios';
axios.defaults.baseURL = 'https://nguyenkim.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';





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
        minHeight: 100,
        color: '#aaaaaa',
        fontFamily: 'Quantico',
        background: secondaryDark,
        margin: 5,
        borderRadius: 10
    },
    btn: {
        background: secondaryDark,
        margin: 10,
        borderRadius: 10,
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

}
const Index = (props) => {

    return (
        ! localStorage.getItem('token') && !props.isAuthenticated ?
            <Redirect to='/login'></Redirect>
            :
            <Container fluid style={{ backgroundColor: mainDark }}>
                <Row style={style.responsive}>
                    <Col xs={9} md={9} xl={9} sm={9} lg={9} style={style.brand}>
                        <h2 style={{ fontSize: '3vw', color: mainLight }}>NGUYEN KIM RATING DASHBOARD</h2>
                    </Col>
                    <Col xs={2} md={2} xl={2} sm={2} lg={2} style={style.btn}>
                        <Button variant='outline-info' onClick={() => store.dispatch(logout())}>Logout</Button>
                    </Col>
                </Row>
                <Row style={{ ...style.responsive }}>
                    <Col xs={11} md={11} xl={5} sm={11} lg={5} style={{ border: `1px solid ${secondaryDark}`, background: secondaryDark, borderRadius: 10, margin: 10 }} >
                        <PercentageChart />
                    </Col>
                    <Col xs={11} md={11} xl={5} sm={11} lg={5} style={{ border: `1px solid ${secondaryDark}`, background: secondaryDark, borderRadius: 10, margin: 10 }} >
                        <LineChart />
                    </Col>
                    <Col xs={11} md={11} xl={10} sm={11} lg={10} style={{ border: `1px solid ${secondaryDark}`, background: secondaryDark, borderRadius: 10, margin: 10 }} >
                        <ColumnChart></ColumnChart>
                    </Col>
                    <Col xs={11} md={11} xl={10} sm={11} lg={10} style={{ border: `1px solid ${secondaryDark}`, background: secondaryDark, borderRadius: 10, margin: 10 }} >
                        <CommentSection></CommentSection>
                    </Col>
                </Row>
            </Container>
    );
}




const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated
    }
)
export default connect(mapStateToProps)(Index);
