import React from "react";
import "./About.css";
function About() {
  console.log("in about");
  return (
    <section id="about">
      <div className="aboutme">About Me</div>
      {/* <div className="aboutDesc">
        Below are the details related to my experience and educational background
      </div> */}
      <hr  style={{width:'20%',color: '#F5F5F5',backgroundColor: 'F5F5F5',height: '0.5px',borderColor : 'F5F5F5'}}/>
      <div className="heading">Experience:</div>
      <div className="experience">
        <div className="educationText">
          <div className="title"><span>Software Engineer</span><span>July 2022 - Present</span></div>
          <div className="institute">Optum (United Health Group), Hyderabad</div>
        </div>
        <div className="educationText">
          <div className="title"><span>Software Intern</span><span>Sept 2021 - June 2022</span></div>
          <div className="institute">NXP Semiconductors, Noida</div>
        </div>
      </div>
      <hr  style={{marginTop:'2rem',width:'100%',color: 'white',backgroundColor: 'white',height: '0.5px',borderColor : 'white'}}/>
      <div className="heading">Education:</div>
      <div className="education">
        <div className="educationText">
          <div className="title"><span>M.Tech, Computer Science and Mathematics</span><span>CGPA: 7.92</span></div>
          <div className="institute">Indian Institute Of Technology Patna</div>
        </div>
        <div className="educationText">
          <div className="title"><span>B.Tech, Computer Science</span><span>CGPA: 8.125</span></div>
          <div className="institute">Government Engineering College Aurangabad</div>
        </div>
        <div className="educationText">
          <div className="title"><span>12th Standard</span><span>Marks: 83.54%</span></div>
          <div className="institute">Pachegaon Mahavidlaya, Georai</div>
        </div>
        <div className="educationText">
          <div className="title"><span>10th Standard</span><span>Marks: 95.60%</span></div>
          <div className="institute">Shiv Sharda Public School</div>
        </div>
      </div>
    </section>
  );
}
export default About;
