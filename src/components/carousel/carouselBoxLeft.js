
import React, { Component } from 'react';



export class carouselBoxLeft extends Component {
  
  state = {
  
}

  render() {
    return (
      <div className="carouselBox-parent-box">
        <h1 className="carouselBox-ZSP-Logo">ZSP</h1>
        <div className="carousel-li">
            <h3 className="carouselBox-text" id="galName">{this.props.gallery}</h3>
            </div>
      </div>
    )
  }
}

export default carouselBoxLeft
