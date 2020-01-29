// This is the carousel constructor to show images
import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';

// -> images
import OneImg from './utilities/images/homes/homesOne.jpg';
import TwoImg from './utilities/images/homes/homesTwo.jpg';
import ThreeImg from './utilities/images/homes/homesThree.jpg';
import FourImg from './utilities/images/homes/homesFour.jpg';
import FiveImg from './utilities/images/homes/homesFive.jpg';
// import SixImg from './utilities/images/homes/homesSix.jpg';



export class Homes extends Component {

  state = { 
  imageGalleryName: this.props.location.pathname.split("/").pop(),// => captures the gallery name from the url
  imageGallery: [OneImg, TwoImg, ThreeImg, FourImg, FiveImg],
  image: OneImg,
  clickCounter: 0,
};

handleClickLeft = (e) => {
e.preventDefault();

  if (this.state.clickCounter > 0) {
  this.setState({
    clickCounter: this.state.clickCounter - 1,
    image: this.state.imageGallery[this.state.clickCounter - 1],
  })} 
  else {
      this.setState({
        clickCounter: this.state.imageGallery.length - 1, // => increasing counter
        image: this.state.imageGallery[this.state.imageGallery.length - 1],
    });
  }
}

handleClickRight = (e) => {
e.preventDefault();

if (this.state.clickCounter < this.state.imageGallery.length - 1) {
  this.setState({
    clickCounter: this.state.clickCounter + 1,
    image: this.state.imageGallery[this.state.clickCounter + 1],
  })}
  else {
      this.setState({
        clickCounter: 0, 
        image: this.state.imageGallery[0],
    });
  }
}


  render() {
    console.log(this.state.clickCounter);
    console.log(this.state.image)

    return (
      
      <div className="carousel-box">
  
          <a className="btn-left" onClick={this.handleClickLeft} >
            <div className="btn-arrow-container-left">
                <h1 className="btn-arrow-left">{"<"}</h1>
              </div>
            
          </a>
          
          <img className="visible-img" 
          src={this.state.image}
          alt="placeholder"
          />

          <a className="btn-right" onClick={this.handleClickRight} >
            <div className="btn-arrow-container-right">
                  <h1 className="btn-arrow-right">{">"}</h1>
                </div>
            </a>

      </div>
    )
  }
}

export default Homes