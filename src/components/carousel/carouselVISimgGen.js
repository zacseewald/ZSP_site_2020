import React, { Component } from 'react';



export class carouselVISimgGen extends Component {

  state = {
    anime: "fadeIn ease 2s",
  }

  render() {
    console.log(this.props);
    return (
      <img className="carouselIMGCompiler-visableIMG" 
          src={this.props.src} 
          alt={this.props.alt}
          style={{animation: this.state.anime}}
      ></img>
    )
  }
}

export default carouselVISimgGen