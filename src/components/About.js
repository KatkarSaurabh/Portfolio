import React from "react";
import "./About.css";
function About() {
  console.log("in about");
  return (
    <section id="about">
      <div className="aboutme">About Me</div>
      <div className="aboutDesc">
        I am sairawrbj w ajwh aw hwjaewha awh a wajw heawhaewhheaw wh ae wahw
        ajw aea weawheawehw awje aweajw awe w e wh eaj
      </div>
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
