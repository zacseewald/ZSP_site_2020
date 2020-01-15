import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/landing';
import Homes from './components/carousel';
import Nav from './components/nav.js';
// import About from './components/about';
import Footer from './components/footer';
// import InfoBtn from './components/infoButton';


class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Router>
          <Nav />
          <Footer />
          
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/homes" component={Homes} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
