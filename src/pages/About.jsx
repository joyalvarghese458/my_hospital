import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Heads from '../components/Heads';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Header/>
        <Heads/>
        <div className='p-5' style={{backgroundColor:'#EBF7FF'}}>
            <center><h1>ABOUT US</h1></center>
        </div>
       <Container>
            <Row className='pt-5'>
                <Col style={{textAlign:'justify',color:'#7C7C7C'}} sm={12} lg={6}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum iste amet voluptatibus placeat culpa esse veritatis fuga? Nesciunt molestiae veritatis placeat vero excepturi. Illo, neque iusto laborum pariatur a delectus!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, earum facere distinctio ut veritatis modi architecto quae debitis at, nam tempore, officia nihil rem. Quam blanditiis iste nesciunt, vero, dolorem incidunt inventore modi in ea earum, ex animi iure at dolorum quo. Soluta hic incidunt blanditiis ducimus. Magnam iste beatae consequuntur ipsa odit recusandae fuga distinctio repellat, magni soluta molestiae voluptate, quos earum necessitatibus! Error corrupti incidunt qui! Veniam dolor aut laboriosam quibusdam minima soluta corporis, tenetur harum? Aliquid sapiente dicta tempore magnam, ad vero provident repellat eius voluptatibus reiciendis sequi cum iusto ex suscipit odit hic ipsum ut tempora! <br /><br />

                    ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit odio sapiente ad quia adipisci odit cum vel vero perferendis cupiditate voluptatum, ipsum mollitia est voluptas nam exercitationem doloremque officiis quaerat, veritatis debitis? Laborum vero id quae aspernatur a cum aliquid nam magni dignissimos! Nesciunt vitae voluptatibus qui unde quis laudantium repellendus animi eligendi beatae. Fugiat odit, repudiandae quia voluptatibus iusto hic molestiae, eaque delectus doloribus error magnam ipsum corrupti id soluta ea maxime expedita! Aliquam ullam voluptas maiores earum dolorem fugit aliquid mollitia culpa, cupiditate quae repellat consectetur porro animi officia sit a dicta eveniet nisi perspiciatis, quisquam veritatis. <br /><br />

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque eum voluptate veritatis explicabo vitae consectetur non facere dignissimos. Tempore maiores vero qui assumenda eos a, doloribus nostrum voluptatibus fuga exercitationem est velit dolorum accusantium autem facilis ullam ipsam porro error incidunt odit eveniet fugiat necessitatibus? Animi optio amet a. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam odit culpa ipsum dolore, nihil mollitia doloremque magni fugiat? Veritatis commodi accusamus, sapiente maiores modi distinctio provident ipsam error adipisci quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod maxime neque fugiat. Praesentium eligendi excepturi accusamus incidunt sed expedita laboriosam! Minus quis deserunt maxime beatae mollitia inventore magni dolore, aliquam natus quod suscipit earum quos cum voluptas, perspiciatis provident dolores ex eaque harum eos aperiam incidunt. Optio, nobis adipisci?
                </Col>
                <Col style={{textAlign:'justify',color:'#7C7C7C'}} sm={12} lg={6}>
                    <img style={{width:'100%'}} src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/02/A3337-07_Bendigo-Hospital_%C2%A9www.batessmart.com_.jpg" alt="" /><br /> <br />

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga perspiciatis at, vero id neque ea excepturi eligendi, velit aspernatur corrupti. Voluptatem possimus amet officia ex distinctio vitae ea quam. <br /> <br />
                     
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis laboriosam optio iure qui nobis, nemo dignissimos. Id voluptatibus officiis assumenda nam necessitatibus iure minima deserunt quos distinctio ut deleniti consectetur quod dicta quis, molestias libero, natus dolores, ullam vitae! Rerum reiciendis doloremque optio labore doloribus repellat natus quod eum?
                </Col>
            </Row>
       </Container>
       <Footer/>
    </div>
  )
}

export default About