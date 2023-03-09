import React from "react";
import Home from "./components/HomePage";
import Projects from "./components/ProjectPage";
import Contact from "./components/ContactPage";
import Header from "./components/Header";
// import Project from "./components/Project";
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
