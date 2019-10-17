import React from 'react';
import './App.css';

import Featured from './components/Home/featured';
import Highlights from './components/Home/highlights';
import Next from './components/Home/next'
import Team from './components/Home/team'
import Projects from './components/Home/projects'
import Contact from './components/Home/contact'
import { Element } from 'react-scroll';
import Header from './HOC/header/Header'
import Footer from './HOC/footer/Footer'
import ResAppBar from './HOC/header/ResAppBar';


function Routes() {
  return (
    <div className="App" tyle={{ height: "", background: '' }} >
      {/* <Header /> */}
      <ResAppBar />

      <Element name="home">
        <Featured />
      </Element>

      <Element name="about">
        <Next />
      </Element>

      <Element name="highlights">
        <Team />
      </Element>

      <Element name="portfolio">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />

    </div>
  );
}

export default Routes;
