
import React, { Component } from 'react';



export class carouselBoxLeft extends Component {
  
  state = {
  
}

  render() {
    return (
      <div className="carouselBox-parent-box">
        <h1 className="carouselBox-ZSP-Logo">ZSP</h1>
        <div className="carousel-li">
            {/* <h3 className="carouselBox-text" id="zacSeewald">ZAC SEEWALD</h3>
            <h3 className="carouselBox-text" id="photography">PHOTOGRAPHY
                <span className="carouselBox-topSpan"></span>
              </h3>
            <h3 className="carouselBox-text">ARCHITECTURE</h3>
            <h3 className="carouselBox-text">DESIGN</h3>
            <h3 className="carouselBox-text" id="drone">DRONE</h3> */}
            <h3 className="carouselBox-text" id="galName">{this.props.gallery}</h3>
            </div>
      </div>
    )
  }
}

export default carouselBoxLeft
