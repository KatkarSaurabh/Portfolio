import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    // <div id='appContainer'>
    //   <Navbar/>
    //   <Intro/>
    //   <About/>
    //   <Projects/>
    //   <Contact/>
    //   <Footer/>
    // </div>
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/intro" element={<Intro/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
