import React, { Component } from 'react';

export class carouselVISimgGen extends Component {
  render() {
      
    return (
      <img className="carouselIMGCompiler-visableIMG" 
          src={this.props.src} 
          alt={this.props.alt}
      ></img>
    )
  }
}

export default carouselVISimgGen