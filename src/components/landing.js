import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';
import InfoBtn from './infoButton';


export class landing extends Component {
state = {
      imageIndexNumber: Math.floor(Math.random() * (ImgInfo.landing.length)), // manages the randome number for image path
      imagePath: '', // dynamically sets the path to the background image
    };
  

componentDidMount() {
  const path = ImgInfo.landing[this.state.imageIndexNumber]["image_fileName"]; // finishes the url path for the image
  // const id = ImgInfo.landing[this.state.imageIndexNumber]["id"]

    this.setState( { 
      imagePath: require("./utilities/images/landing/" + path),
      // imageID: ImgInfo.landing[this.state.imageIndexNumber]["id"],
    }); 
}


  render() {
    return (
      
      <div className="body-box">
        <InfoBtn 
          index={this.state.imageIndexNumber}
        />
        <div className="image-coverGreenBox"></div>
        <div className="image-coverBlackBox"></div>
          {/* This is the static background image. Needs to rotate through a select group of images in thenfinal version. */}
         <img className="bgImage" 
           src={this.state.imagePath}
         />
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
