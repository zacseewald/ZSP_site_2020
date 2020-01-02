// This is a testing component to show that you can have specific styles associated to a designated component. instead of using the system of having the index.js and index.css files in the component folder, they are separated into 2 folders. One for the component.js and the other for stylessheet.scss. This allows for better readability and control over styles. They load into App.js and are then thrown in to the main index.html


// Components_name.js should always be placed in the components folder. App.js should ne the only JS component file outside in the main directory.


import React, { Component } from 'react'
import BGImageOne from './utilities/images/landing/LandingOne.jpg';
import BGImageTwo from './utilities/images/landing/LandingTwo.jpg';
import BGImageThree from './utilities/images/landing/LandingThree.jpg';
import BGImageFour from './utilities/images/landing/LandingFour.jpg';
import BGImageFive from './utilities/images/landing/LandingFive.jpg';
import BGImageSix from './utilities/images/landing/LandingSix.jpg';

export class landing extends Component {

state = {
  imageLocation: [ BGImageOne, BGImageTwo, BGImageThree, BGImageFour, BGImageFive, BGImageSix], // array of images for the background
};

// This function handles the rotating background image. It is envoked when the page loads and runs as long as the viewer has the landing page open
handleBackgroundImageRotation = (e) => {
// randomely selects the index number from the above imageLocation array
  const imgFile = Math.floor(Math.random() * Math.floor(this.state.imageLocation.length + 1));;
// Sets image location index number location to define the image that is shoen
  const img = this.state.imageLocation[imgFile];
  return img;
};



componentDidMount() {
// can run functions in here that I only want to happen when the page loads, also can load variables: see console examples below
// const that = "thats";
// console.log(that);
};



  render() {
    return (

      // can call functions here that are defined above, however - "this." must come first.
     
  
      
      // box for the top half of the landing page. contains the rotating image and the animated logo.
      <div className="body-box">
          {/* This is the static background image. Needs to rotate through a select group of images in thenfinal version. */}
         <img className="bgImage" src={this.handleBackgroundImageRotation()} />
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
              
              {/* <div className="imageLocationTest">{this.state.imageLocation[0]}</div> */}

        </div>
      </div>
    )
  }
}

export default landing;
