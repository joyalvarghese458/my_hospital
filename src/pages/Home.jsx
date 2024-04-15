import React from 'react'
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardCarousel from '../components/CardCarousel';
import DepartmentCarousels from '../components/DepartmentCarousels';
import { Link } from 'react-router-dom';
import Heads from '../components/Heads';




function Home() {
  return (  
    <div>
      <Header/>
         
       <Heads/>

     {/* carousel */}
      
         <Carousel interval={2000} fade={true}>
          <Carousel.Item>
            <img height={600} src="https://www.sacfirm.com/wp-content/uploads/2019/06/GettyImages-961288154-e1561759666671.jpg" className='d-block w-100' alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img height={600} src="https://nyulangone.org/files/child-in-hospital-bed-inline.jpg" className='d-block w-100' alt="" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img height={600} src="https://www.nurseregistry.com/wp-content/uploads/2018/04/nurse-helping-plan-hospital-discharge.jpg" className='d-block w-100' alt="" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
         </Carousel>

         {/* basic items */}
        <Container>
           <div className='d-flex justify-content-evenly m-5'>
              <Row>
                 <Col lg={3} md={6} sm={12}>
                  <div className='box1'>
                   <div>
                       <div>Book An Appoinment</div>
                      <div className='d-flex justify-content-center'><button className='btn btn-primary fw-bold'>click</button></div>
                   </div>
                  </div>
                 </Col>
                 <Col lg={3} md={6} sm={12}>
                  <div className='box2'>
                  <div>
                       <div>OPD Timing's</div>
                      <div className='d-flex justify-content-center'><button className='btn btn-success fw-bold'>click</button></div>
                   </div>
                  </div>
                 </Col>
                 <Col lg={3} md={6} sm={12}>
                  <div className='box3'>
                  <div>
                       <div>Health Check up</div>
                      <div className='d-flex justify-content-center'><button className='btn btn-primary fw-bold'>click</button></div>
                   </div>
                  </div>
                 </Col>
                 <Col lg={3} md={6} sm={12}>
                  <div className='box4'>
                  <div>
                       <div>Our Services</div>
                      <div className='d-flex justify-content-center'><button className='btn btn-success fw-bold'>click</button></div>
                   </div>
                  </div>
                 </Col>
              </Row>
           </div>
        </Container>
        <hr />
        <Container>
          
        <div id='about' className='mt-5 mb-5'>
            <p>INTRODUCTION</p>
            <h1>My Hospital</h1>
            <p style={{color:'#073A79'}} className='fw-bolder'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sunt quaerat iusto excepturi facere cupiditate voluptates animi deleniti, eos ipsum hic saepe aliquid dolorem sit ipsa corporis esse doloribus veritatis!</p>
  
            <p style={{textAlign:'justify',color:'#7C7C7C'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure provident, quasi eveniet in excepturi blanditiis sit eum minus, ab eaque laborum laudantium atque at quisquam perspiciatis ea ipsa voluptatibus. Corrupti perferendis nulla tenetur quo ab recusandae, veritatis, quia repellat minus officiis vero nemo in unde exercitationem placeat nobis accusantium ratione. Impedit, ullam officia assumenda rerum, aut explicabo inventore illo fuga nemo quis laborum nostrum sequi nesciunt est labore dignissimos blanditiis, ex ipsa suscipit cum architecto similique rem repudiandae exercitationem. Ipsa quidem reiciendis nostrum sint aperiam assumenda? Deserunt, culpa repudiandae. Ullam iusto molestiae sapiente, autem adipisci amet eveniet possimus sint reprehenderit dolores tempora ducimus sit rerum tempore blanditiis esse animi sequi iure quaerat voluptates unde quibusdam! Perspiciatis architecto,aliquid reiciendis, inventore velit nulla laboriosam magni suscipit ipsam. Dolore, quos maxime! Eveniet ab recusandae maiores tenetur nesciunt illo aut libero dolore quo, dolorum excepturi ipsa. Perspiciatis.</p>
  
            <div>
              <Link to={'/about'}><button className='btn border-0 border-top border-bottom custom-border-color'><span style={{color:'#0F948F'}}>find more <i style={{color:'#0F948F'}} class="fa-solid fa-arrow-right ms-2"></i></span></button></Link>
            </div>
        </div>
        </Container>

        {/* our doctors */}
        <CardCarousel/>
        
        

        <div className='doc-image mb-5'>
        </div>

         {/* departments */}
           <DepartmentCarousels/>

        <Container className='mt-5'>
        <h1 className='mb-3'>Testimonials</h1>
         <div className='shadow p-3 rounded'>
            <Carousel controls={false} indicators={false} interval={1000} fade={true}>
            <Carousel.Item>
            <img height={400} src="https://images.template.net/89016/personal-testimonial-template-1jwn8.jpeg" className='d-block w-100' alt="" />
            </Carousel.Item>
            <Carousel.Item>
            <img height={400} src="https://stjameshospital.co.in/wp-content/uploads/2020/09/sr-herese-mary-testimonal.jpg" className='d-block w-100' alt="" />
            </Carousel.Item>
            <Carousel.Item>
            <img height={400} src="https://stjameshospital.co.in/wp-content/uploads/2020/09/nidhin-poulose-testimonal.jpg" className='d-block w-100' alt="" />
            </Carousel.Item>
            </Carousel>
         </div>
        </Container>
     <Footer/>

     
    
    </div>
  )
}

export default Home