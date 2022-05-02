import React from "react";
import './Volunteering.css'
const Volunteering = () => {
  return (
    <div>
      <div class="timelines">

        <div class="timeline__component timeline__component--bg">
          <h2 class="timeline__title">Spokesperson at Hactoberfest meetup</h2>
          <p class="timeline__paragraph">
          <b>Microsoft Learn Student Ambassador's Chapter (MLSAC-BVP)</b><br/> Presented and explained my team's web project on a meeting intended for hacktoberfest participation.
          </p>
        </div>
        <div class="timeline__middle">
          <div class="timeline__point"></div>
        </div>
        <div class="timeline__component">
          <div class="timeline__date">Oct 2021</div>
        </div>


        <div class="timeline__component">
          <div class="timeline__date timeline__date--right">May 2021 - June 2021</div>
        </div>
        <div class="timeline__middle">
          <div class="timeline__point"></div>
        </div>
        <div class="timeline__component timeline__component--bg">
          <h2 class="timeline__title">Web Developer and Content Writer</h2>
          <p class="timeline__paragraph"> <b>TechShuttle, Hack Club BVP 🚀</b><br/>Developed a webpage and created write-ups for various events. </p>
        </div>


        <div class="timeline__component timeline__component--bottom timeline__component--bg">
          <h2 class="timeline__title">Anchor</h2>
          <p class="timeline__paragraph"> <b>IEEE</b> <br/> Anchoring of sessions in WIEhack and volunteering for sponsorship department for this event.</p>
        </div>
        <div class="timeline__middle">
          <div class="timeline__point"></div>
          <div class="timeline__point timeline__point--bottom"></div>
        </div>
        <div class="timeline__component timeline__component--bottom">
          <div class="timeline__date">May 2021</div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
