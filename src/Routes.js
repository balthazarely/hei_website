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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: "50px",
    paddingBottom: theme.spacing(8),
  }
}));


function Routes() {
  const classes = useStyles();
  return (
    <div className="App" style={{ height: "", background: '' }} >
      {/* <Header /> */}
      {/* <ResAppBar /> */}


      <Element name="">
        <Featured />
      </Element>

      <Element name="mission">
        <Next />
      </Element>

      <Element name="about">
        <Team />
      </Element>

      <Element name="portfolio">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      {/* <Footer /> */}

    </div >
  );
}

export default Routes;
