import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Home.css';
import { Container } from 'react-bootstrap';

function Header() {
  return (
    <div>
         {/* navbar */}

         <Navbar expand="lg" className="bg-info fs-6 fixed-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            
            
            <Nav.Link href="/medicalServices">MEDICAL SERVICES</Nav.Link>
            <Nav.Link href="/doctors">OUR DOCTORS</Nav.Link>

            <NavDropdown title="DEPARTMENTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Anesthesiology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Neurology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Orthodontics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PATIENT CARE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sample 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 5</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 6</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 7</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 8</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 9</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 10</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 11</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 12</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sample 13</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/joinus">JOIN US</Nav.Link>
            <Nav.Link variant="underline" href="/contact">CONTACT </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-danger ">Search</Button>
                </Form>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header