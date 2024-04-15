import React, { useState } from 'react'
import { Row , Col} from 'react-bootstrap'
import docimg from '../gallery/doctor-cartoon-png-favpng-JqH0YL9TRsCzycv0ZCqPa0dNw-removebg-preview.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function LoginPage() {
  const AdminData = {
    username:'myhospital',
    password:'myhospital123'
  }
  const [logId , setLogid] = useState({
    username:'',
    password:''
  })
  
  
  console.log(logId);
   
  const handleChange=(e)=>{
     e.preventDefault();
     if(AdminData.username===logId.username && AdminData.password===logId.password){
        window.location.assign('/admin')
     }else{
      alert('Incorrect username or password')
     } 
     
  }
   
   
  return (
    <div>
        <div className='fixed-top d-flex justify-content-center align-items-center text-align-center bg-info' style={{height:'750px'}}>
             <div className='w-75'>
             <Link to={'/'} style={{textDecoration:'none'}} className='mb-2'><i class="fa-solid fa-arrow-left"></i> Back to home</Link>
             <div style={{backgroundColor:'#7A5C58',color:'white'}} className='card'>
                   <Row>
                      <Col md={6}>
                         <img src={docimg} alt="" />
                      </Col>
                      <Col className='p-5' md={6}>
                      <Form>
                                <h3 className='text-center mb-5'><i class="fa-solid fa-user fs-2"></i>  Admin Login</h3>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label>Username</Form.Label>
                                 <Form.Control onChange={(e)=>setLogid({...logId,username:e.target.value})} type="text" placeholder="Username" />
                               </Form.Group>
                         
                               <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control onChange={(e)=>setLogid({...logId,password:e.target.value})} type="password" placeholder="Password" />
                               </Form.Group>
                               <Button onClick={handleChange} variant="primary" type="submit">
                                 Login
                               </Button>
                         </Form> 
                                               </Col>
                   </Row>
               </div>
             </div>
        </div>
    </div>
  )
}

export default LoginPage