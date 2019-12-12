import React, { Component } from 'react';
import Landing from './components/landing';
import NavButton from './components/navButton';
// import X from './components/testTwo';
/* Note, there is no stylesheet import here. It is imported drectly into the index.js file.
All links to the different components live here
*/



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavButton />
        <Landing/>
        
      </div>
    );
  }
}

export default App;
