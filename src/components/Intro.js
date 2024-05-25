import React from 'react'
import './Intro.css'
import Navbar from './Navbar';
import Footer from './Footer';


function Intro() {
  return (<>
    <section id='intro'>
      <div className='introHello'>Hello,</div>
      <div className='introName'>I'm <span className='name'>Saurabh</span>,</div>
      <div className='introProf'>Software Developer</div>
      <p className='introPara'>I am a skilled Software Developer with experiance in building web apps.</p>
    </section>
    {/* <Footer></Footer> */}
    </>
  )
}

export default Intro
