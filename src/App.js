import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/landing';
import Carousel from './components/carousel';
import Nav from './components/nav.js';
// import Test from './components/test.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Router>
          <Nav />
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/homes" component={Carousel} />
                  <Route exact path="/buildings" component={Carousel} />
                  {/* <Route exact path="/test" component={Test} gallery="landing" /> */}
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
