import React from "react";
import "./css/Portfolio.css";
import WorkTimeline from "./components/WorkTimeline";
import Volunteering from "./components/Volunteering";
import embark from "./awards/embark.jpg";
import cograd from "./awards/cograd.png";
import d2c from "./awards/d2c.png";
import es6 from "./awards/es6.png";
import ieee from "./awards/ieee.png";
import inception from "./awards/Inception.png";
import nsoj from "./awards/nsoj.png";
import seo from "./awards/seo.png";
import technopairs from "./awards/technopairs.png";
import webocode from "./awards/webocode.png";
import react from './awards/react.jpeg';
import evotech from "./awards/evotech.png";
import p2h from "./awards/p2h.png";


const About = () => {
  return (
    <div className="portfolioMain">
      <div className="about">
        <h1>Divye Gupta</h1>
        <p className="para">
        I’m a Bachelor of Technology student in Computer Science Engineering with a wide range of tech skills in various domains like 
        Web Development, Cross-platform application development, Cloud services, DBMS, and DSA, with the help of which I look forward 
        to contributing to the field of technological innovation. Being an entrepreneur at heart I participate in business challenges 
        and pitches as well as take a keen interest in the startup world. In addition to my academic side, I’m a content writer and 
        creator, and podcaster.  Always seeking opportunities to upskill and enhance me.
          <br /> <b>Feel free to navigate around this website to learn more about me!</b>
        </p>
      </div>
      <div class="wave1">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>

      <div className="box2">
        <h1>Work Experience</h1>
        <WorkTimeline />

        <h1>Volunteering</h1>
        <Volunteering />
      </div>
      <div className="spacer layer1"></div>
      
      <div className="box3">
        <h1>Awards and Achievements</h1>
        <div className="certificates">
          <img src={embark} alt="This is a certificate" className="certi" />
          <img src={cograd} alt="This is a certificate" className="certi" />
          <img src={d2c} alt="This is a certificate" className="certi" />
          <img src={es6} alt="This is a certificate" className="certi" />
          <img src={ieee} alt="This is a certificate" className="certi" />
          <img src={inception} alt="This is a certificate" className="certi" />
          <img src={nsoj} alt="This is a certificate" className="certi" />
          <img src={seo} alt="This is a certificate" className="certi" />
          <img src={technopairs} alt="This is a certificate" className="certi" />
          <img src={webocode} alt="This is a certificate" className="certi" />
          <img src={react} alt="This is a certificate" className="certi" />
          <img src={evotech} alt="This is a certificate" className="certi" />
          <img src={p2h} alt="This is a certificate" className="certi" />
        </div>
      </div>
    </div>
  );
};

export default About;
