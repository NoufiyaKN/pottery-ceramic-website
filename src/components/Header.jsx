import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-white">
      <Container>
        <Link to={'/'} style={{textDecoration : 'none'}}>
          <Navbar.Brand href="#home" className='me-5'><img
                src="https://cdn2.iconfinder.com/data/icons/recreation-hobbies-vol-2-line/128/Pottery-512.png"
                width="30"
                height="30"
                className="d-inline-block align-top ms-5"
                alt=""
              />
                  Creative Kiln</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>About</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>Services</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>Shop</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header