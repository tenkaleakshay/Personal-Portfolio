import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Resume from "./resume";
import Contact from "./contact";
import AboutMe from "./aboutme";
import Project from "./project";

const Main = () => (
  <switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/project" component={Project} />
  </switch>
);

export default Main;
