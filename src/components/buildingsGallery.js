// This is the carousel constructor to show images
import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';
import InfoBtn from './infoButton';

// -> images
import a from './utilities/images/buildings/buildings_00.jpg';
import b from './utilities/images/buildings/buildings_01.jpg';
import c from './utilities/images/buildings/buildings_02.jpg';
import d from './utilities/images/buildings/buildings_03.jpg';
import e from './utilities/images/buildings/buildings_04.jpg';
import f from './utilities/images/buildings/buildings_05.jpg';
import g from './utilities/images/buildings/buildings_06.jpg';
import h from './utilities/images/buildings/buildings_07.jpg';
import i from './utilities/images/buildings/buildings_08.jpg';
import j from './utilities/images/buildings/buildings_10.jpg';
import k from './utilities/images/buildings/buildings_11.jpg';
import l from './utilities/images/buildings/buildings_12.jpg';
import m from './utilities/images/buildings/buildings_13.jpg';
import n from './utilities/images/buildings/buildings_14.jpg';
import o from './utilities/images/buildings/buildings_15.jpg';
import p from './utilities/images/buildings/buildings_16.jpg';
import q from './utilities/images/buildings/buildings_17.jpg';
import r from './utilities/images/buildings/buildings_18.jpg';
import s from './utilities/images/buildings/buildings_19.jpg';
import t from './utilities/images/buildings/buildings_20.jpg';

// import SixImg from './utilities/images/homes/homesSix.jpg';


export class Buildings extends Component {
state = { 
  imageGalleryName: this.props.location.pathname.split("/").pop(),// => captures the gallery name from the url
  imageGallery: [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t ],
  image: a,
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
            <h1 className="my-name-text">ZSP</h1>
            <p className="my-name-gallery-title">BUILDINGS</p>
          </div>

          <div className="img-counter-container">
              <p className="img-counter-text">{this.state.galleryCount + " / " + this.state.galleryLength}</p>
          </div>

             <img className="visible-img" 
              src={this.state.image}
              alt="placeholder"
              />
        

              <div className="arrow-container">
                    <a className="btn-left" onClick={this.handleClickLeft} >
                      <div className="btn-arrow-container-left">
                          <p className="btn-arrow-left">
                            {"<"}
                            <p className="btn-arrow-left-prev">PREV</p></p>
                        </div>
                      
                    </a>
                    
                  {/* <span className="arrow-divider"></span> */}

                    <a className="btn-right" onClick={this.handleClickRight} >
                      <div className="btn-arrow-container-right">
                            <p className="btn-arrow-right">
                              <p className="btn-arrow-right-more">MORE</p>
                              {">"}
                            </p>
                          </div>
                      </a>
                </div>

      </div>
    )
  }
}

export default Buildings