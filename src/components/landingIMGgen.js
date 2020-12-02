import React, { Component, lazy , Suspense } from 'react';
import ImgInfo from './utilities/image.json';
// import LandingIMGS from '../../public/images/landing/large'

const imgIndexNum = Math.floor(Math.random() * (ImgInfo.landing.length));
// console.log(imgIndexNum);
// const imgPathgen = LandingIMGS + "Landing_" + imgIndexNum.toString(); 
const imgPathgen = "what it is?"
console.log(imgPathgen);

export class landingIMGgen extends Component {
  
  state = {
  
}

  render() {
      
    return (
      <div className="landingIMGgen-parent-box">
         <img className="bgImage" 
              src={this.props.src}
              alt={this.props.alt}
            />
      </div>
    )
  }
}

export default landingIMGgen
