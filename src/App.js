import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/landing';
import Homes from './components/homesGallery';
import Buildings from './components/buildingsGallery';
import Nav from './components/nav.js';
// import Footer from './components/footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Router>
          <Nav />
          {/* <Footer /> */}
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/homes" component={Homes} />
                  <Route exact path="/buildings" component={Buildings} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
