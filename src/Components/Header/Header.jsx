import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="sticky-top">
            <Navbar bg="dark" collapseOnSelect expand="lg">

                <Navbar.Brand href="#home" style={{ marginLeft: '140px' }}>

                    <img style={{ width: '100px', color: 'white', filter: 'contrast(0%) brightness(500%)' }}
                        src={logo}

                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ fontSize: "25px", color: "#fff", background: "black" }} > <FontAwesomeIcon icon={faBars} /> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >



                    <Form inline style={{ marginLeft: '70px', weight: '70px' }}>
                        <FormControl type="text" placeholder="Search Your  Destination" className="mr-sm-2" />

                    </Form>
                    <Nav  >
                        <Link to="/home">
                            <Nav.Link  style={{ marginLeft: '45px', color: 'white', fontWeight: '600' }} href="#home">
                                News
                    </Nav.Link>
                        </Link>
                        <Nav.Link to="/destination" style={{ marginLeft: '50px', color: 'white', fontWeight: '600' }} href="#features">
                            Destination
                    </Nav.Link>
                        <Nav.Link to="/blog" style={{ marginLeft: '50px', color: 'white', fontWeight: '600' }} href="#pricing">
                            Blog
                    </Nav.Link>
                        <Nav.Link to="/contact" style={{ marginLeft: '50px', color: 'white', fontWeight: '600' }} href="#features">
                            Contact
                    </Nav.Link>
                        <Link to="/login"><Button style={{ marginLeft: '50px', width: '80px', height: '40px', borderRadius: '10px', fontWeight: '600' }} variant="warning">
                            Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;