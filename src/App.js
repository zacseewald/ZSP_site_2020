import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/landing';
import Carousel from './components/carousel';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Router>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/dwellings" component={Carousel} />
                  <Route exact path="/buildings" component={Carousel} />
                  {/* <Route exact path="/profile" component={Profile} /> */}
                  {/* <Route exact path="/test" component={Test} /> */}
                </Switch>
           
            </Router>
      </div>
    );
  }
}

export default App;
