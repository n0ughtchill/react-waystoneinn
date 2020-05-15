import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

class Home extends Component {
    render() {
        return(
            <React.Fragment>
                <Container className="welcome">
                <Row>
                    <Col md={2}></Col>
                    <Col>
                        <h3>Welcome</h3>
                        Reserve your stay now.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore.
                    </Col>
                    <Col md={2}></Col>
                    
                </Row>
            </Container>
        

            <Container>
                <Row>
                    <Col md><img className="img-fluid" src="/assets/img/kitchen.jpg" /></Col>
                    <Col md className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa
                        qui officia deserunt mollit anim id est laborum.
                    </Col>
                </Row>
                <Row>

                <Col md={{order: 2}} >
                        <img className="img-fluid" src="/assets/img/glass.jpg" />
                    </Col>
                    <Col md className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa
                        qui officia deserunt mollit anim id est laborum.
                    </Col>

                    
                </Row>
            </Container>
        
        
    </React.Fragment>        
    )
        }
}

export default Home