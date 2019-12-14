import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/landing';
 import Nav from './components/nav.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
          <Nav />
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </Router>
      </div>
    );
  }
}

export default App;
