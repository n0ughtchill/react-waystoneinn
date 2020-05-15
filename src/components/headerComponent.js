import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, Container, Jumbotron, Button, Col, Row, Modal, ModalHeader, Form, Label, ModalBody, FormGroup, Input, } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return(
            <React.Fragment> 
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col></Col>
                            <Col auto className="col-auto">
                            <img className="img-fluid" src="/assets/img/logo.png" alt="logo" />
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </Jumbotron>
              {/*   <div className="jumbotron-fluid" >
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                        <div className=" col mx-auto">
                        <img className="img-fluid" src="/assets/img/logo.png" alt="logo" />
                        </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div> */}
            

                <Navbar className="Navbar" stiky="top" expand="md">
                    <Container>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                 <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                            <Button onClick={this.toggleModal} className="book-button" type="submit">
                                Book Now!
                            </Button>

                        
                    </Container>
                </Navbar> 

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" innerRef={input => this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={input => this.remember =input} />
                                Remember me
                            </Label>  
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </React.Fragment>
        )
    }
}

export default Header