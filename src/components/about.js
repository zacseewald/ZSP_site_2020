// This is a testing component to show that you can have specific styles associated to a designated component. instead of using the system of having the index.js and index.css files in the component folder, they are separated into 2 folders. One for the component.js and the other for stylessheet.scss. This allows for better readability and control over styles. They load into App.js and are then thrown in to the main index.html


// Components_name.js should always be placed in the components folder. App.js should ne the only JS component file outside in the main directory.


import React, { Component } from 'react'



export class about extends Component {
  render() {
    return (
      // box for the top half of the landing page. contains the rotating image and the animated logo.
      <div className="about-box">
          <div className="about-text">
              this is the about page Dude!
        </div>
      </div>
    )
  }
}

export default about;
