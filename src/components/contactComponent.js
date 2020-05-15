import React, { Component } from 'react';
import {Row, Col, Form, Container, Control, formGroup, Label, Input, Button} from 'reactstrap'

class Contact extends Component {
    render() {
        return(
            <Container>

        <Row>

            <Col className="col-xl-8 offset-xl-2 py-5">

                <h1>Contact </h1>

                <p>Leave us a message.</p>

              
                <form id="contact-form" method="post" action="" role="form">

                    <div className="messages"></div>
                
                    {/* <Control className="controls"> */}
                
                        <Row className="row">
                            <Col className="col-md-6">
                                
                                    <label htmlfor="firstName">First name *
                                    <input type="text" model=".firstName" id="firstName"
                                                                        name="firstName"
                                                                        className="form-control" 
                                                                        placeholder="First Name" 
                                                                         
                                                                        />
                                    </label>
                                
                            </Col>
                            <Col class="col-md-6">
                                
                                    <label htmlfor="lastName">Last name *
                                    <input type="text" model=".lastName"
                                                    id="lastName" 
                                                    name="lastName" 
                                                    className="form-control" 
                                                    placeholder="Surname" 
                                                    />
                                    </label>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-6">
                                
                                    <label htmlFor="email">Email *
                                    <input type="text" model=".email"
                                                    id="form_email" 
                                                    name="email" 
                                                    className="form-control" 
                                                    placeholder="Email"/>      
                                </label>
                            </Col>
                            <Col className="col-md-6">
                                
                                    <label className="form-label" htmlFor="phoneNum">Phone Number *
                                    <input type="text" model=".phoneNum"
                                                    id="phoneNum" 
                                                    name="phoneNum" 
                                                    className="form-control"  
                                                    placeholder="Phone number"/>
                                    
                                    </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-12">
                                
                                    <label htmlFor="message">Message *
                                    <input type="textarea" model=".message" 
                                                        id="message"
                                                        name="message" 
                                                        className="form-control"
                                                        placeholder="Message for me *" 
                                                        rows="4"/>
                                    
                                    </label>
                            </Col>
                            <Col className="col-md-12">
                                <Button>Submit</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-12">
                                <p className="text-muted" />
                                    <strong>*</strong> These fields are required. Contact form template by
                                    
                            </Col>
                        </Row>
                    
                
                </form>

            </Col>

        </Row>

    </Container>
        )
        }
}

export default Contact