import React, { Component } from 'react';
import Logo from './components/logo';
// import X from './components/testTwo';
/* Note, there is no stylesheet import here. It is imported drectly into the index.js file.
All links to the different components live here
*/



class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        
      </div>
    );
  }
}

export default App;
