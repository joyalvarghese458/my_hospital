import React from 'react'
import '../Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='foot'>
        <Container>
             <Row>
              <Col lg={3} md={6} sm={12}>
                <h3>Quick Links</h3>
                <ul>
                  <li>HOME</li>
                  <li>ABOUT US</li>
                  <li>MEDICAL SERVICES</li>
                  <li>OUR DOCTORS</li>
                  <li>DEPARTMENTS</li>
                  <li>PATIENT CARE</li>
                  <li>JOIN US</li>
                </ul>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h3>Quick Links</h3>
                <ul>
                  <li>HOME</li>
                  <li>ABOUT US</li>
                  <li>MEDICAL SERVICES</li>
                  <li>OUR DOCTORS</li>
                  <li>DEPARTMENTS</li>
                  <li>PATIENT CARE</li>
                  <li>JOIN US</li>
                </ul>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h3>Quick Links</h3>
                <ul>
                  <li>HOME</li>
                  <li>ABOUT US</li>
                  <li>MEDICAL SERVICES</li>
                  <li>OUR DOCTORS</li>
                  <li>DEPARTMENTS</li>
                  <li>PATIENT CARE</li>
                  <li>JOIN US</li>
                </ul>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <h3>Quick Links</h3>
                 <ul>
                     <li>HOME</li>
                     <li>ABOUT US</li>
                     <li>MEDICAL SERVICES</li>
                     <li>OUR DOCTORS</li>
                     <li>DEPARTMENTS</li>
                     <li>PATIENT CARE</li>
                     <Link to={'/login'} style={{textDecoration:'none',color:'white'}}><li>Admin Login</li></Link>
                </ul>
              </Col>
              
             </Row>
             <hr />
             <center>Copyright © 2020 My Hospital. Powered by Meridian Solutions Inc</center>
        </Container>
    </div>
  )
}

export default Footer