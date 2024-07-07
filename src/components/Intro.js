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
      <p className='introPara'>I am skilled in building dynamic and user-friendly applications, leveraging expertise in JavaScript, React.js, Node.js, Express.js and MongoDB.</p>
    </section>
    {/* <Footer></Footer> */}
    </>
  )
}

export default Intro
