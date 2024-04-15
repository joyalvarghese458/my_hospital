import React from 'react'
import Header from '../components/Header'
import Heads from '../components/Heads'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
       <Header/>
       <Heads/>
       <div className='p-5' style={{backgroundColor:'#EBF7FF'}}>
            <center><h1>CONTACT US</h1></center>
        </div>

       <Footer/>
    </div>
  )
}

export default Contact