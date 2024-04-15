import React from 'react'
import img1 from '../gallery/logo.png';
import { Col, Row } from 'react-bootstrap';

function Heads() {
  return (
    <div>
         {/* head */}

     <div className='shadow'>
       <div className='container'>
        <Row style={{marginTop:'62px'}} className='mb-2'>
              <Col lg={4} sm={12}>
               <div className='d-flex'>
                  <div>
                  <img  width={100} src={img1} alt="no image" />
                  </div>
                  <div>
                    <h1>My Hospital</h1>
                    <p>Kochi,Ernakulam dist,Kerala 680-721</p>
                  </div>
               </div>
              </Col>
              <Col lg={4} sm={12}>
                <div className='d-flex justify-content-center mt-4'>
                  <div><i class="fa-regular fa-envelope fs-2"></i></div>
                  <div className='ps-3'>
                    <div className='fw-bold'>EMAIL US</div>
                    <div className='text-primary'>myhospitalofiice@gmail.com</div>
                  </div>
                </div>
              </Col>

              <Col lg={4} sm={12}>
              <div className='d-flex justify-content-center mt-4'>
                  <div><i class="fa-solid fa-phone fs-2"></i></div>
                  <div className='ps-3'>
                    <div className='fw-bold'>FOR EMERGENCY DIAL</div>
                    <div className='text-primary'>0480-20192471, 271054471</div>
                  </div>
                </div>
              </Col>
        </Row>
       </div>
     </div>
    </div>
  )
}

export default Heads