// This is a testing component to show that you can have specific styles associated to a designated component. instead of using the system of having the index.js and index.css files in the component folder, they are separated into 2 folders. One for the component.js and the other for stylessheet.scss. This allows for better readability and control over styles. They load into App.js and are then thrown in to the main index.html


// Components_name.js should always be placed in the components folder. App.js should ne the only JS component file outside in the main directory.


import React, { Component } from 'react'

export class test extends Component {
  render() {
    return (
      <div className="body-box">
        <p id="comp-identifier">test.js component</p>
        <h1 id="header">Hello Teanage America!</h1>
        <p>My name is Miss Anabella and I'm here to teach you Sass for dummies.</p>
        <p id="p-specific">Baa, bee, boo, baa, boo!</p>
      </div>
    )
  }
}

export default test
