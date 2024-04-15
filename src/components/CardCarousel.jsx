import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

const CardCarousel = () => {
  return (
   <div className='pt-5 pb-5' style={{backgroundColor:'#EBF7FF'}}>
      <Container>
            <center>
            <h1>Specialist Doctors</h1>
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
                      <Card.Img height={300} variant="top" src="https://www.advinohealthcare.com/wp-content/uploads/2020/08/shutterstock_155685458.jpg" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                        <Button variant="primary">Book Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                  <Card style={{ width: '17rem' }}>
                      {/* Your content for the first card */}
                      <Card.Img height={300} variant="top" src="https://c.stocksy.com/a/jnC700/z9/1717507.jpg" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                        <Button variant="primary">Book Now</Button>
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
                      <Card.Img height={300} variant="top" src="https://thumbs.dreamstime.com/b/female-doctor-23301058.jpg" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                        <Button variant="primary">Book Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                  <Card style={{ width: '17rem' }}>
                      {/* Your content for the first card */}
                      <Card.Img height={300} variant="top" src="https://segurancadotrabalhosempre.com/wp-content/uploads/2016/08/O6T8LS01.jpg" />
                      <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                          This is a sample card in the carousel.
                        </Card.Text>
                        <Button variant="primary">Book Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
  
            </Carousel>
          </Col>
        </Row>
       
      </Container>
  
   </div>  );
};

export default CardCarousel;
