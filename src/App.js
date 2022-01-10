import React, { useState } from 'react';
import Home from './Components/Home';
import { Route, Switch, useLocation } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

// IMAGES

import HomeStyleDark from './Assets/Dark/home_style_dark.svg';
import HomeStyleMobileDark from './Assets/Dark/home_style_dark_mobile.svg';

import HomeStyleLight from './Assets/Light/home_style_light.svg';
import HomeStyleMobileLight from './Assets/Light/home_style_light_mobile.svg';

import AboutStyleDark from './Assets/Dark/about_me_style_dark.svg';
import AboutStyleMobileDark from './Assets/Dark/about_me_style_dark_mobile.svg';

import AboutStyleLight from './Assets/Light/about_me_style_light.svg';
import AboutStyleMobileLight from './Assets/Light/about_me_style_light_mobile.svg';

import HamburgerDark from './Assets/Dark/hamburger_dark.svg';
import HamburgerLight from './Assets/Light/hamburger_light.svg';

import CloseDark from './Assets/Dark/close_dark.svg';
import CloseLight from './Assets/Light/close_light.svg';
import NavBar from './Components/NavBar';

const darkTheme = {
  dark: true,
  gradient: {
    to: '#252525',
    from: '#434343',
  },
  contactGradient: {
    from: '#8650FF',
    to: '#33249D',
  },
  textNormal: '#FFFFFF',
  textColored: '#D0C9FF',
  textDark: '#786EBC',
  images: {
    home: {
      normal: HomeStyleDark,
      mobile: HomeStyleMobileDark,
    },
    about: {
      normal: AboutStyleDark,
      mobile: AboutStyleMobileDark,
    },
    navBar: {
      hamburger: HamburgerDark,
      close: CloseDark,
    },
  },
};

const lightTheme = {
  dark: false,
  gradient: {
    to: '#FFFFFF',
    from: '#D9D9FF',
  },
  contactGradient: {
    from: '#4F6CD3',
    to: '#9FF5BB',
  },
  textNormal: '#434343',
  textColored: '#5270D2',
  textDark: '#5667A2',
  images: {
    home: {
      normal: HomeStyleLight,
      mobile: HomeStyleMobileLight,
    },
    about: {
      normal: AboutStyleLight,
      mobile: AboutStyleMobileLight,
    },
    navBar: {
      hamburger: HamburgerLight,
      close: CloseLight,
    },
  },
};

const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const location = useLocation();

  const changeTheme = (tf) => {
    setTheme(tf ? darkTheme : lightTheme);
  };

  document.querySelector(
    'body'
  ).style.backgroundImage = `linear-gradient(45deg, ${theme.gradient.from} 0%, ${theme.gradient.to} 100%)`;

  const buildHome = () => <Home theme={theme} changeTheme={changeTheme} />;
  const buildPage = (MyPage) => () => <MyPage theme={theme} />;

  return (
    <ThemeProvider style={{ width: '100%', height: '100%' }} theme={theme}>
      <NavBar key="navbar" index={location.pathname} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={buildHome} />
          <Route path="/aboutMe" component={buildPage(AboutMe)} />
          <Route path="/myWork" component={buildPage(MyWork)} />
          <Route path="/contact" component={buildPage(Contact)} />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
