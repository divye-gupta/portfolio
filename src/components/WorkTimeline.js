import React from "react";
import "./WorkTimeline.css";

const WorkTimeline = () => {
  return (
    <div className="main">
      <div class="container">
        <div class="timeline">
          <ul>
            {/* <li>
              <div class="timeline-content">
                <h3 class="date">Sep 2021 – Feb 2022</h3>
                <h1>Content Developer Head</h1>
                <p>
                  <b>Google Developer Student Club BVP</b><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tempora ab laudantium voluptatibus aut eos placeat
                  laborum, quibusdam exercitationem labore.
                </p>
              </div>
            </li>

            <li>
              <div class="timeline-content">
                <h3 class="date">Jun 2021 – Feb 2022</h3>
                <h1>Web Developer</h1>
                <p>
                  <b>Microsoft Learn Student Ambassador's Chapter (MLSAC-BVP)</b><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tempora ab laudantium voluptatibus aut eos placeat
                  laborum, quibusdam exercitationem labore.
                </p>
              </div>
            </li> */}

            <li>
              <div class="timeline-content">
                <h3 class="date">Jun 2021 – Jul 2021</h3>
                <h1>Front End Developer</h1>
                <p>
                  <b>Freelancing client</b><br />
                  Built a designer Landing page for an event using the basic tech stack of HTML, CSS, and JS.
                </p>
              </div>
            </li>

            <li>
              <div class="timeline-content">
                <h3 class="date">Dec 2021 – Jan 2022</h3>
                <h1>React Native mobile app</h1>
                <p>
                  <b>Freelancing client</b><br />
                  Built a DEVICE MANAGEMENT APP using React Native framework which works fine on both Android as well as iOS.
                  Application includes a working interface along with integration to AWS cloud services.
                </p>
              </div>
            </li>

            <li>
              <div class="timeline-content">
                <h3 class="date">Oct 2021 – Feb 2022</h3>
                <h1>Technical content and Blog writer</h1>
                <p>
                  <b>Unstop(formerly Dare2Compete)</b> <br />
                  Worked as a technical content writer for D2C (now Unstop) 
                  where I wrote number of articles and blogs on DSA, Development, Hardware and 
                  Software integration, and various development processes.
                </p>
              </div>
            </li>

            <li>
              <div class="timeline-content">
                <h3 class="date">Dec 2020 – Present</h3>
                <h1>Podcaster</h1>
                <p>
                  <b>In Essence Podcast</b> <br />
                  A talk show produced with a will to empathise. We talk about society and culture and try to bring 
                  lost little-bitty everyday ordinary routine to light, hoping to seek an ameliorating awareness. 
                  A lot is labile here, but the meliorism is constant.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline;
