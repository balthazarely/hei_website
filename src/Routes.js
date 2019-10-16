import React from 'react';
import './App.css';
import Header from './HOC/header/Header'
import Featured from './components/Home/featured';
import Highlights from './components/Home/highlights';
import Next from './components/Home/next'
import Team from './components/Home/team'
import Projects from './components/Home/projects'
import Contact from './components/Home/contact'


function Routes() {
  return (
    <div className="App" >
      <Featured />
      <Next />
      <Team />
      <Projects />
      <Contact />
    </div>
  );
}

export default Routes;
