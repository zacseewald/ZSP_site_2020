// This is the carousel constructor to show images
import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';
import InfoBtn from './infoButton';

export class Carousel extends Component {

state = { 
  imageGalleryName: this.props.location.pathname.split("/").pop(),// => captures the gallery name from the url

  //dynamic image path states

  imageGallery: [],
  image: '',
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
    galleryLength: imgCount,
    galleryCount: counter,

    //infoBTN Props
    imageSite: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["architect_site"],
    imageArchName: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["architect_name"],
    imageLocal: ImgInfo[this.props.location.pathname.split("/").pop()][this.state.clickCounter - 1]["location_city_state"],
  })} 
  else {
      this.setState({
        clickCounter: this.state.imageGallery.length - 1, // => increasing counter
        image: this.state.imageGallery[this.state.imageGallery.length - 1],
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
}

componentDidMount() {
  // const imgCount = this.state.imageGallery.length;
  const imgCount = ImgInfo[this.state.imageGalleryName].length;
  const galleryName = this.state.imageGalleryName;
  const imgFileName = ImgInfo[this.state.imageGalleryName][this.state.clickCounter]["image_fileName"];
  const imgPath = process.env.PUBLIC_URL  + '/images/' + galleryName + '/';
  const arrFileName = [];

 
  ImgInfo[galleryName].forEach(element => arrFileName.push(imgPath + element["image_fileName"]));

  this.setState({
    galleryLength: imgCount,
    image: imgPath + imgFileName,
    imageGallery: arrFileName,
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
    <p className="my-name-gallery-title">{this.state.imageGalleryName.toUpperCase()}</p>
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
                          <h1 className="btn-arrow-left">
                            {"<"}
                            <p className="btn-arrow-left-prev">PREV</p></h1>
                        </div>
                      
                    </a>
                    
                  {/* <span className="arrow-divider"></span> */}

                    <a className="btn-right" onClick={this.handleClickRight} >
                      <div className="btn-arrow-container-right">
                            <h1 className="btn-arrow-right">
                              <p className="btn-arrow-right-more">MORE</p>
                              {">"}
                            </h1>
                          </div>
                      </a>
                </div>

      </div>
    )
  }
}

export default Carousel