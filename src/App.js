import React from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import Project from './pages/project';
import Skill from './pages/skill';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Education/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
