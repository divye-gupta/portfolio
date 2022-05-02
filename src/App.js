import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import MyCV from "./MyCV";
import MyPodcast from "./MyPodcast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="box1">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component ={Portfolio} ></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={ContactMe}></Route>
        <Route exact path="/CV" component={MyCV}></Route>
        <Route exact path="/podcast" component={MyPodcast}></Route>
      </Switch>
    </Router>
  );
}

export default App;

// process.env.PUBLIC_URL + '/assets'