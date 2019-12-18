// This is a testing component to show that you can have specific styles associated to a designated component. instead of using the system of having the index.js and index.css files in the component folder, they are separated into 2 folders. One for the component.js and the other for stylessheet.scss. This allows for better readability and control over styles. They load into App.js and are then thrown in to the main index.html


// Components_name.js should always be placed in the components folder. App.js should ne the only JS component file outside in the main directory.


import React, { Component } from 'react'
import BGImage from './utilities/images/landing/ShertzAquadicCenter_e1.jpg';


export class landing extends Component {

state = {
  word: "dig that",
  thing: "one fox",
};

handleWord = (e) => {
  console.log(this.state.word);
};


handleThing = (e) => {
  console.log(this.state.thing);
};


componentDidMount() {
// can run functions in here that I only want to happen when the page loads, also can load variables: see console examples below
const that = "thats";
console.log(that);
};



  render() {
    return (

      // can call functions here that are defined above, however - "this." must come first.
     this.handleThing(),
  
      
      // box for the top half of the landing page. contains the rotating image and the animated logo.
      <div className="body-box">
          {/* This is the static background image. Needs to rotate through a select group of images in thenfinal version. */}
         <img className="bgImage" src={BGImage} />
         {/* Box containing the ZSP logo and animated text. */}
          <div className="logoBox">
          {/* ZSP logo in plain text */}
              <div className="ZS-logoBox-text">ZSP</div>
              {/* zac seewald logo in plain text */}
              <div className="ZS-Logo-text">ZAC SEEWALD</div>
              {/* photography logo in plain text */}
              <div className="photography-logo-text">PHOTOGRAPHY</div>
               {/* architectural logo in plain text */}
              <div className="architectural-logo-text">ARCHITECTURAL</div>
        </div>
      </div>
    )
  }
}

export default landing;
