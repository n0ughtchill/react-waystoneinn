import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavbarToggler, Collapse, Container, Jumbotron, Button, Col, Row } from 'reactstrap'
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
            

                <Navbar color="dark" stiky="top" expand="md">
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
                        
                            <Button className="book-button" type="submit">
                                Book Now!
                            </Button>

                        
                    </Container>
                </Navbar> 
            </React.Fragment>
        )
    }
}

export default Header