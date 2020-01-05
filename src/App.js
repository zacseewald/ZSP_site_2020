import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/landing';
import Houses from './components/carousel';
import Nav from './components/nav.js';
import About from './components/about';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
          <Nav />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/houses" component={Houses} />
                </Switch>
              </Router>
      </div>
    );
  }
}

export default App;
