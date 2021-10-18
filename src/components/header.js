import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import React from 'react';

function Header(props) {
  return(<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand>
                                <Navbar.Brand>
                                    <img
                                      src="asset/fanzplay-logo.png"
                                      width="50"
                                      height="50"
                                      className="d-inline-block align-top"
                                    />{' '}
                                  </Navbar.Brand></Navbar.Brand>

                            </Navbar>
  );
}

export default Header;
/*<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/about-us">Rewards</Nav.Link>
    <Nav.Link href="/contact-us">Stats</Nav.Link>
    <NavDropdown title="Settings" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
    </Nav>
</Navbar.Collapse>*/
