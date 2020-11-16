import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';
import InfoBtn from './infoButton';
import Nav from './nav.js';


export class landing extends Component {
state = {
      imageIndexNumber: Math.floor(Math.random() * (ImgInfo.landing.length)), // manages the randome number for image path
      imagePath: '', // dynamically sets the path to the background image
      imageGalleryName: "landing",
      imageArchName: "",
      imageLocal: "",
      imageSite: "",
    };
  
  

componentDidMount() {
  const path = ImgInfo.landing[this.state.imageIndexNumber]["image_fileName"]; // finishes the url path for the image
  const folderLocation = process.env.PUBLIC_URL  + '/images/landing/' ;
    this.setState( { 
      imagePath: folderLocation + path,
      imageArchName: ImgInfo.landing[this.state.imageIndexNumber]["architect_name"],
      imageArchName: ImgInfo.landing[this.state.imageIndexNumber]["architect_name"],
      imageLocal: ImgInfo.landing[this.state.imageIndexNumber]["location_city_state"],
      imageSite: ImgInfo.landing[this.state.imageIndexNumber]["architect_site"]
    }); 
    console.log(this.state.imageIndexNumber);
}


  render() {

    return (
      
      <div className="body-box">
        <Nav 
          gallery={this.state.imageGalleryName} 
         />
      
         <InfoBtn
          index={this.state.imageIndexNumber}
          gallery={this.state.imageGalleryName} 
          name={this.state.imageArchName}
          location={this.state.imageLocal}
          site={this.state.imageSite}
        />
        {/* <div className="landing-fadeInBox"></div> */}
          {/* This is the static background image. Rotates through a select group of images in landing image folder. */}
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
        </div>
      </div>
    )
  }
}

export default landing;
