
import React, { Component } from 'react';


export class carouselimgINFO extends Component {
  
  state = {
  transistion: "1s",
}

  render() {

    return (
      <div className="carouselimg-parent-box">
        <div className="carouselimg-info-container">
            <div className="carouselimg-info-box">
                <h3 id="carouselimg-archName"><p style={{ fontWeight: 100, fontSize: "14px", fontStyle: "italic"}}>archtect/designer</p> {this.props.name.toUpperCase()}</h3>
                <h5 id="carouselimg-local">{"[" + this.props.location.toLowerCase() + "]"}</h5>
            </div>
        </div>
      </div>
    )
  }
}

export default carouselimgINFO

// This component feeds the image to the carousel.js based on the props sent from the carousel.js comp.