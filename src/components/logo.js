// This is a testing component to show that you can have specific styles associated to a designated component. instead of using the system of having the index.js and index.css files in the component folder, they are separated into 2 folders. One for the component.js and the other for stylessheet.scss. This allows for better readability and control over styles. They load into App.js and are then thrown in to the main index.html


// Components_name.js should always be placed in the components folder. App.js should ne the only JS component file outside in the main directory.


import React, { Component } from 'react'
import BGImage from './utilities/images/ShertzAquadicCenter.jpg';
import Logo from'./utilities/graffics/Logo.gif'

export class logo extends Component {
  render() {
    return (
      <div className="body-box">
// This is the static background image. Needs to rotate through a select group of images in thenfinal version
        <img className="bgImage" src={BGImage} />

        <img className="logoGif" src={Logo} />
       
      </div>
    )
  }
}

export default logo
