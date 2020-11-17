
import React, { Component } from 'react';
import ImgJSON from "../utilities/image.json";


export class carouselBlindImg extends Component {
  
  state = {
     gallery: this.props.gallery,
     image: 0,
}

componentDidMount() {
    this.setState({
        image: ImgJSON[this.state.gallery].length,
    })
}

  render() {
    return (
      <div className="carouselBlindImg-parent-box">
        <h1 className="carouselBlindImg" >{this.state.gallery}</h1>
        <img className="carouselBlindImg-invisible-img" src={{}}  />


        <div className="imageMaper">
          {ImgJSON.map(
            ImgJSON => (
                <img
                />
              )
          )}
        </div>
            </div>
    )
  }
}

export default carouselBlindImg