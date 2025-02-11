import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-white fw-bold fs-3'><Link to={'/'} style={{textDecoration:"none",color:"white"}}>Nahada C</Link></Navbar.Brand>
        <Navbar.Toggle className='text-light' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-white">
            <Nav.Link  className='text-white ' ><Link to={'/about'} className='navlink'>ABOUT</Link></Nav.Link>
            <Nav.Link  className='text-white ms-4' ><Link to={'/projects'} className='navlink'>PROJECTS</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header