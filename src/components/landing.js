import React, { Component, lazy , Suspense } from 'react';
import ImgInfo from './utilities/image.json';
import Nav from './nav.js';


const LandingIMGgen = lazy(() => import('./landingIMGgen'));
const imgIndexNum = Math.floor(Math.random() * (ImgInfo.landing.length));


export class landing extends Component {
state = {
      imageIndexNumber: imgIndexNum, // manages the randome number for image path
      imagePath: '', // dynamically sets the path to the background image 
      imageSmallPath: '',  // dynamically sets the path to the background image [smallest version so that it loads first and then the larger version loads post Promise] -> method using lazy Loading 
      imageGalleryName: "landing",
      imageArchName: "",
      imageLocal: "",
      imageSite: "",
      imgAlt: "",
    };
  
  

componentDidMount() {
  const pathSmallimg = ImgInfo.landing[this.state.imageIndexNumber]["small_image_fileName"];
  const path = ImgInfo.landing[this.state.imageIndexNumber]["image_fileName"]; // finishes the url path for the image
  const folderLocation = process.env.PUBLIC_URL  + '/images/landing/';
  const folderLocationSmall = process.env.PUBLIC_URL  + '/images/landing/small/';
    this.setState( { 
      imagePath: folderLocation + path, // Sets the full size  image path
      imageSmallPath: folderLocationSmall + pathSmallimg, // Sets the small lazy loading path
      imageArchName: ImgInfo.landing[this.state.imageIndexNumber]["architect_name"],
      imageArchName: ImgInfo.landing[this.state.imageIndexNumber]["architect_name"],
      imageLocal: ImgInfo.landing[this.state.imageIndexNumber]["location_city_state"],
      imageSite: ImgInfo.landing[this.state.imageIndexNumber]["architect_site"],
      imgAlt: ImgInfo.landing[this.state.imageIndexNumber]["description"],
      
    }); 
}


  render() {
    return (
      
      <div className="body-box">
        <Nav 
          gallery={this.state.imageGalleryName} 
         />

         {/* Lazy loading event with fallback using the small image version. */}
      <Suspense fallback={
                <img
                src={this.state.imagePath}
                alt={this.state.imgAlt}
              />
      } >
                <LandingIMGgen 
                  src={this.state.imagePath}
                  alt={this.state.imgAlt}
                />
          </Suspense>

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
