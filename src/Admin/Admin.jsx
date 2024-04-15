import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Admin.css'
import { Link } from 'react-router-dom';

function Admin() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className='p-3 shadow'>
        <h1 className='text-center'>My Hospital</h1>
        <Link style={{textDecoration:'none'}} to={'/'} className='text-end'><div id='back'><i class="fa-solid fa-arrow-right"></i> Back to Home</div></Link>
        </div>
         <Container className='pt-3'>
              {/* <div className='d-flex'>
                <div style={{marginRight:'50px'}}>
                    <h4>Add doctor</h4> <br />
                    <h4>Add department</h4>
                </div>
                <div>
                    <div>
                        <Button onClick={handleShow} className='me-2'>Add</Button>
                        <Button>Show</Button>
                    </div><br />
                    <div>
                        <Button onClick={handleShow} className='me-2'>Add</Button>
                        <Button>Show</Button>
                    </div>
                    
                </div>
              </div> */}

              <div className='row'>
                 <div className="col-md-4">
                    <div className='d-flex'>
                    <h4>Add doctor</h4>
                    <Button className='btn bg-success ms-2 me-2'>Add</Button>
                    <Button className='btn bg-danger'>Remove</Button>
                    </div>
                 </div>
                 <div className="col-md-4">
                  <div className='d-flex'>
                    <h4>Add department</h4>
                    <Button className='btn bg-success ms-2 me-2'>Add</Button>
                    <Button className='btn bg-danger'>Remove</Button>
                    </div></div>
                 <div className="col-md-4">
                  <div className='d-flex'>
                    <h4>Medical services</h4>
                    <Button className='btn bg-success ms-2 me-2'>Add</Button>
                    <Button className='btn bg-danger'>Remove</Button>
                    </div></div>

              </div>
              <hr className='mt-5'/>

              <div className="row">
                <div className="col-md-4">
                  <h3>Doctors</h3>
                  <table className='border'>
                    <thead>
                      <tr>
                        <td>dr.id</td>
                        <td>dr.Name</td>
                        <td>department</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
              </div>
             
         </Container>

         {/* modal for add doctor */}
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Admin