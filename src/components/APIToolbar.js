import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Row, Col, Form } from 'react-bootstrap';
import { mainLight, secondaryDark } from '../helpers/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faStopwatch, faListOl, faEye, faSyncAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { secondsToHms } from '../helpers/timeParser';

const style = {
    responsive: {
        display: 'flex',
        alignItems: 'center'
    },
    rowOption: {
        margin: '10px 0px 10px 0px'
    },
    selected: {
        color: '#ffffff'
    }
}

const ICONS_MAP = {
    'DURATIONS': faCalendarAlt,
    'TIMER': faStopwatch,
    'LIMITS': faListOl,
    'VIEWS': faEye,
    'LOCATIONS': faMapMarkerAlt
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}




class RowOption extends Component {
    render() {
        return (
            this.props.data.length ?
                this.props.dropdown ?
                    
                        <Row style={{ ...style.responsive, ...style.rowOption,  }}>
                        <Col xs={3} md={3} xl={3} sm={3} lg={3} style={{ color: mainLight }}>
                            <p style={{ margin: 0, whiteSpace: 'nowrap' }}> <FontAwesomeIcon icon={ICONS_MAP[this.props.name.toUpperCase()]} /> {capitalize( this.props.name)}  </p>
                        </Col>
                        <Col xs={8} md={8} xl={8} sm={8} lg={8} style={{ color: mainLight,}}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" onChange={(e) => { this.props.onOptionChange(this.props.name, e.target.value) }}
                            style={{ backgroundColor: secondaryDark, color: '#ffffff' }}>
                            {
                                this.props.data.map(val =>
                                    (<option
                                        key={val}>
                                        {val}
                                    </option>))
                            }
                        </Form.Control>
                        </Form.Group>
                        </Col>
                        </Row>
                    :
                    <Row style={{ ...style.responsive, ...style.rowOption }}>
                        <Col xs={3} md={3} xl={3} sm={3} lg={3} style={{ color: mainLight }}>
                            <p style={{whiteSpace:'nowrap', verticalAlign:'middle'}}>
                                <span style={{ margin: 0, fontSize:'2vh' }}>  <FontAwesomeIcon icon={ICONS_MAP[this.props.name.toUpperCase()]}/> {capitalize( this.props.name)} </span>
                            </p>
                        </Col>
                        <Col xs={8} md={8} xl={8} sm={8} lg={8} style={{ ...style.responsive, justifyContent: 'center' }}>
                            <ButtonGroup aria-label="Basic example">
                                {
                                    this.props.data &&
                                    this.props.data.map(val =>
                                        (<Button size='sm' variant='outline-info'
                                            key={val}
                                            style={this.props.selections[this.props.name] === val ? style.selected : null}
                                            onClick={() => this.props.onOptionChange(this.props.name, val)} >
                                            {val}
                                        </Button>))
                                }
                            </ButtonGroup>
                        </Col>
                    </Row >
                : ''
        )
    }
}


class ToolbarQuery extends Component {


    onOptionChange = (option, value) => {
        this.props.onOptionChange(option, value)
    }



    render() {

        const dropdown = this.props.dropdown ? this.props.dropdown : []
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} xl={10} lg={10}>
                        {
                            Object.keys(this.props.options).map((val) => {
                                return <RowOption
                                    name={val}
                                    data={this.props.options[val]}
                                    key={val}
                                    onOptionChange={this.onOptionChange}
                                    selections={this.props.selections}
                                    dropdown={dropdown.includes(val)}
                                />
                            })
                        }
                    </Col>

                    <Col xs={12} sm={12} md={12} xl={2} lg={2}>
                        <Row style={{ ...style.responsive, ...style.rowOption }}>
                            <Col xs={3} md={3} xl={3} sm={3} lg={3} style={{ color: mainLight, ...style.responsive, }}>
                                <p style={{ margin: 0 }}> <FontAwesomeIcon icon={faSyncAlt} />  </p>
                            </Col>
                            <Col xs={9} md={9} xl={9} sm={9} lg={9} style={{ color: mainLight, ...style.responsive, justifyContent: 'center' }}>
                                <p style={{ margin: 0 }}>{secondsToHms(this.props.countdown)}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ToolbarQuery;
