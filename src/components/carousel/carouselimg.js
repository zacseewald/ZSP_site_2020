
import React, { Component } from 'react';



export class carouselimg extends Component {
  
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
        <img className="carouselimg-visible-img" src={this.props.src}  />
      </div>
    )
  }
}

export default carouselimg
