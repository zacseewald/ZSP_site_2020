// This is the carousel constructor to show images
import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';
import InfoBtn from './infoButton';

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
  duration: ".3s",
// counter state
  galleryLength: 0,
  galleryCount: 1,
  //image info props for infoBTN
  imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][0]["architect_site"],
  imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][0]["architect_name"],
  imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][0]["location_city_state"],
};

handleClickLeft = (e) => {
e.preventDefault();

const counter = this.state.clickCounter + 1;
const imgCount = this.state.imageGallery.length;


  if (this.state.clickCounter > 0) {
  this.setState({
    clickCounter: this.state.clickCounter - 1,
    image: this.state.imageGallery[this.state.clickCounter - 1],
    galleryLength: counter,
    galleryCount: imgCount,

    //BTN Props
    imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["architect_site"],
    imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["architect_name"],
    imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["location_city_state"],
  })} 
  else {
      this.setState({
        clickCounter: this.state.imageGallery.length - 1, // => increasing counter
        image: this.state.imageGallery[this.state.imageGallery.length - 1],
        galleryLength: counter,
        galleryCount: imgCount,

            //BTN Props
        imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.imageGallery.length - 1]["architect_site"],
        imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.imageGallery.length - 1]["architect_name"],
        imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.imageGallery.length - 1]["location_city_state"],
    });
  }
}

handleClickRight = (e) => {
e.preventDefault();

const counter = this.state.clickCounter + 1;
const imgCount = this.state.imageGallery.length;


if (this.state.clickCounter < this.state.imageGallery.length - 1) {
  this.setState({
    clickCounter: this.state.clickCounter + 1,
    image: this.state.imageGallery[this.state.clickCounter + 1],
    galleryLength: imgCount,
    galleryCount: counter,

        //BTN Props
    imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter + 1]["architect_site"],
    imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter + 1]["architect_name"],
    imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter + 1]["location_city_state"],
  })}
  else {
      this.setState({
        clickCounter: 0, 
        image: this.state.imageGallery[0],
        galleryLength: imgCount,
        galleryCount: counter,

            //BTN Props
        imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][0]["architect_site"],
        imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][0]["architect_name"],
        imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][0]["location_city_state"],
    });
  }
}

componentDidMount() {
  const imgCount = this.state.imageGallery.length;
  this.setState({
    galleryLength: imgCount,
  });
}


  render() {

    return (
      
      <div className="carousel-box">
       <InfoBtn 
        // send the props for the infoBTN here
        index={this.state.clickCounter}
        gallery={this.state.imageGalleryName}
        name={this.state.imageArchName}
        location={this.state.imageLocal}
        site={this.state.imageSite}
       />

          <div className="my-name-container">
            <h1 className="my-name-text">ZAC SEEWALD</h1>
          </div>

          <div className="img-counter-container">
              <p className="img-counter-text">{this.state.galleryCount + " / " + this.state.galleryLength}</p>
          </div>



          <a className="btn-left" onClick={this.handleClickLeft} >
            <div className="btn-arrow-container-left">
                <h1 className="btn-arrow-left">
                  {"<"}
                  <p className="btn-arrow-left-prev">PREV</p></h1>
              </div>
            
          </a>
          
          <img className="visible-img" 
          src={this.state.image}
          alt="placeholder"
          />

          <a className="btn-right" onClick={this.handleClickRight} >
            <div className="btn-arrow-container-right">
                  <h1 className="btn-arrow-right">
                    <p className="btn-arrow-right-more">MORE</p>
                    {">"}
                  </h1>
                </div>
            </a>

      </div>
    )
  }
}

export default Homes