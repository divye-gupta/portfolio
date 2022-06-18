import React from "react";
import "./css/Projects.css";

import aws from "./assets/logos/aws.png";
import c from "./assets/logos/c.png";
import cpp from "./assets/logos/cpp.png";
import css from "./assets/logos/css.png";
import figma from "./assets/logos/figma.png";
import firebase from "./assets/logos/firebase.png";
import html from "./assets/logos/html.png";
import js from "./assets/logos/js.png";
import next from "./assets/logos/next.png";
import react from "./assets/logos/react.png";
import writing from "./assets/logos/writing.png";

const Projects = () => {
  return (
    <div className="projectsmain">
      <div className="skillsmain">
        <div className="skillhead">
          <h1>Skills</h1>
        </div>
        <div className="skillcards">
          <div className="card">
            <img src={html} alt="" />
            <p className="skillname">HTML</p>
            <div className="outbar">
              <div className="inbarhtml"></div>
            </div>
            <p className="percentage">90%</p>
          </div>

          <div className="card">
            <img src={css} alt="" />
            <p className="skillname">CSS</p>
            <div className="outbar">
              <div className="inbarcss"></div>
            </div>
            <p className="percentage">88%</p>
          </div>

          <div className="card">
            <img src={js} alt="" />
            <p className="skillname">JavaScript</p>
            <div className="outbar">
              <div className="inbarjs"></div>
            </div>
            <p className="percentage">80%</p>
          </div>

          <div className="card">
            <img src={react} alt="" />
            <p className="skillname">ReactJS</p>
            <div className="outbar">
              <div className="inbarreactjs"></div>
            </div>
            <p className="percentage">70%</p>
          </div>

          <div className="card">
            <img src={react} alt="" />
            <p className="skillname">React Native</p>
            <div className="outbar">
              <div className="inbarreactn"></div>
            </div>
            <p className="percentage">68%</p>
          </div>

          <div className="card">
            <img src={figma} alt="" />
            <p className="skillname">Figma</p>
            <div className="outbar">
              <div className="inbarfigma"></div>
            </div>
            <p className="percentage">80%</p>
          </div>

          <div className="card">
            <img src={c} alt="" />
            <p className="skillname">C</p>
            <div className="outbar">
              <div className="inbarc"></div>
            </div>
            <p className="percentage">80%</p>
          </div>

          <div className="card">
            <img src={cpp} alt="" />
            <p className="skillname">C++</p>
            <div className="outbar">
              <div className="inbarcpp"></div>
            </div>
            <p className="percentage">80%</p>
          </div>

          <div className="card">
            <img src={next} alt="" />
            <p className="skillname">NextJS</p>
            <div className="outbar">
              <div className="inbarnext"></div>
            </div>
            <p className="percentage">70%</p>
          </div>

          <div className="card">
            <img src={writing} alt="" />
            <p className="skillname">Tech Blogs</p>
            <div className="outbar">
              <div className="inbarcontent"></div>
            </div>
            <p className="percentage">90%</p>
          </div>

          <div className="card">
            <img src={aws} alt="" />
            <p className="skillname">AWS</p>
            <div className="outbar">
              <div className="inbaraws"></div>
            </div>
            <p className="percentage">50%</p>
          </div>

          <div className="card">
            <img src={firebase} alt="" />
            <p className="skillname">Firebase</p>
            <div className="outbar">
              <div className="inbarfirebase"></div>
            </div>
            <p className="percentage">40%</p>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="projectshead">
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
