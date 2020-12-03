// This is the carousel constructor to show images
import React, { Component, lazy, Suspense } from 'react';
import ImgInfo from './utilities/image.json';
import CarouselBox from './carousel/carouselBoxLeft';
import CarouselimgINFO from './carousel/carouselimgINFO';
import Nav from './nav.js';

const CarouselIMGCompiler = lazy(() => import('./carousel/carouselIMGCompiler'));

export class Carousel extends Component {

state = { 
  imageGalleryName: this.props.location.pathname.split("/").pop(),// => captures the gallery name from the url

  //dynamic image path states
  imageGallery: [],
  image: '',
  clickCounter: 0,
  clickCounterRightOne: 1,
  clickCounterRightTwo: 2,
  duration: ".3s",
// counter state
  galleryLength: 0,
  galleryCount: 1,
  //image info props for infoBTN
  imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][0]["architect_site"],
  imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][0]["architect_name"],
  imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][0]["location_city_state"],

  // Arrow button animation states:
  btnBackground: "yellow",

  // Blind image states
  blindImgPath: "",
  blindImgNextCounter: 1,
};

handleRightArrowAnimation = (e) => {
  e.preventDefault();
  this.setState({
    btnBackground: "black",
  })
}


handleClickLeft = (e) => {
e.preventDefault();

const counter = this.state.clickCounter + 1;
const imgCount = this.state.imageGallery.length;
// console.log(counter);

  if (this.state.clickCounter === 0) {
    this.setState({
      clickCounter: imgCount -1,
    });
  }
  else if (this.state.clickCounter > 0  || this.state.clickCounter === imgCount) {
  this.setState({
    clickCounter: this.state.clickCounter - 1,
    image: this.state.imageGallery[this.state.clickCounter - 1],

    galleryLength: imgCount,
    galleryCount: counter,

    //infoBTN Props
    imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["architect_site"],
    imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["architect_name"],
    imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["location_city_state"],
  })} 
  else {
      this.setState({
        clickCounter: this.state.imageGallery.length, // => decreaseing counter
        image: this.state.imageGallery[this.state.imageGallery.length -1],
        // imageRightOne: this.state.imageGallery[this.state.imageGallery.length - 2],
        galleryLength: imgCount,
        galleryCount: counter,

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
  // console.log(this.state.blindImgPath)
}

componentDidMount() {
  // const imgCount = this.state.imageGallery.length;
  const imgCount = ImgInfo[this.state.imageGalleryName].length;
  const galleryName = this.state.imageGalleryName;
  const imgFileName = ImgInfo[this.state.imageGalleryName][this.state.clickCounter]["image_fileName"];

  const imgFileNameRightOne = ImgInfo[this.state.imageGalleryName][this.state.clickCounterRightOne]["image_fileName"];
  const imgFileNameRightTwo = ImgInfo[this.state.imageGalleryName][this.state.clickCounterRightTwo]["image_fileName"];

  const imgPath = process.env.PUBLIC_URL  + '/images/' + galleryName + '/';
  const arrFileName = [];

 
  ImgInfo[galleryName].forEach(element => arrFileName.push(imgPath + element["image_fileName"]));

  this.setState({
    galleryLength: imgCount,
    image: imgPath + imgFileName,
    imageRightOne: imgPath + imgFileNameRightOne,
    imageRightTwo: imgPath + imgFileNameRightTwo,
    imageGallery: arrFileName,
  });
}


  render() {
    console.log(this.state.clickCounter)
    return (
      
      <div className="carousel-box">
       <Nav
          gallery={this.state.imageGalleryName}
        />

       <CarouselBox
          gallery={this.state.imageGalleryName}
        />

        <Suspense fallback={<div>Loading...</div>} >
                <CarouselIMGCompiler 
                  gallery={this.state.imageGalleryName}
                  counter={this.state.clickCounter}
                  name={this.state.imageArchName}
                  location={this.state.imageLocal}
                  alt={"Images By Zac Seewald [The Photographer]"}
                /></Suspense>

            <CarouselimgINFO 
              name={this.state.imageArchName}
              location={this.state.imageLocal}
            />


              <div className="arrow-container">

                    <a className="btn-left" onClick={this.handleClickLeft} >

                      <div className="btn-arrow-container-left">
                          <span className="btn-arrow-top"
                                onClick={this.handleRightArrowAnimation}></span>
                            <span className="btn-arrow-bottom"></span>
                        </div>
                      
                    </a>
                    
                    <a className="btn-right" onClick={this.handleClickRight} >
            
                      <div className="btn-arrow-container-right"
                          background={this.state.btnBackground}>
                            <span className="btn-arrow-top"
                                onClick={this.handleRightArrowAnimation}></span>
                            <span className="btn-arrow-bottom"></span>
                          </div>
                      </a>
                </div>

      </div>
    )
  }
}

export default Carousel