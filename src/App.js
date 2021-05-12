import React from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Project from "./pages/project";
import Skill from "./pages/skill";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
