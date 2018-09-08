import React, { Component } from 'react';
import Home from './Components/Home';
import { Route } from 'react-router-dom'
import AboutMe from './Components/AboutMe';
import { AnimatedSwitch } from 'react-router-transition';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import { SMALL } from './ScreenSizes';


class App extends Component {
  render() {
    return (
      <div style={{width: "100%", height:"100%"}}>
        <AnimatedSwitch
          atEnter={window.innerWidth > SMALL ? { opacity: 0 } : { opacity: 1 }}
          atLeave={window.innerWidth > SMALL ? { opacity: 0 } : { opacity: 1 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/myWork" component={MyWork} />
          <Route path="/contact" component={Contact} />
        </AnimatedSwitch>
      </div>
    );
  }
}

export default App;
