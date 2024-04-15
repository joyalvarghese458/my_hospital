import React from 'react'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function DepartmentCarousels() {
  return (
    <div>
         <div className='pt-5 pb-5' style={{backgroundColor:'#EBF7FF'}}>
      <Container>
            <center>
                <p style={{color:'#073A79'}} className='fw-bolder'>WHAT WE DO BEST</p>
            <h1>Departments</h1>
            </center>
           
        <Row className="justify-content-center p-5">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Carousel fade={true} indicators={false} prevIcon={<BsChevronLeft  size={30} color="red" />}
              nextIcon={<BsChevronRight size={30} color="red" />}>
              <Carousel.Item>
                <Row>
                  <Col xs={12} md={6}>
                    <Card style={{ width: '17rem' }}>
                      {/* Your content for the first card */}
                      <Card.Img height={300} variant="top" src="https://th.bing.com/th/id/OIP.xqtq7u0E-Aw6gBtj5Es9tQHaFh?rs=1&pid=ImgDetMain" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                  <Card style={{ width: '17rem' }}>
                      {/* Your content for the first card */}
                      <Card.Img height={300} variant="top" src="https://www.rumcsi.org/wp-content/uploads/2020/09/Cardiology-scaled.jpg" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
  
              {/* Add more Carousel.Items for additional sets of cards as needed */}
              
              <Carousel.Item>
                <Row>
                  <Col xs={12} md={6}>
                  <Card style={{ width: '17rem' }}>
                      {/* Your content for the first card */}
                      <Card.Img height={300} variant="top" src="https://dailymedicos.com/wp-content/uploads/2021/12/close-up-doctor-checking-woman-eyes-1.jpg" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                  <Card style={{ width: '17rem' }}>
                      {/* Your content for the first card */}
                      <Card.Img height={300} variant="top" src="https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/15634/502381/heroimage0.399379001643141256.jpg" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
  
            </Carousel>
          </Col>
        </Row>
       
      </Container>
  
   </div>  
    </div>
  )
}

export default DepartmentCarousels