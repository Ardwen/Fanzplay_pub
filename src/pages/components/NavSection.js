import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavSection = ()=>{
    return(
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">FANzPlay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/home"><FontAwesomeIcon icon={faHome} /></Nav.Link>
              <Nav.Link href="/newGame">New Game</Nav.Link>
              <Nav.Link href="/setting">Setting</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
    )
}

export default NavSection;