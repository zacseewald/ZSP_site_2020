// This is the carousel constructor to show images
import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';



import HousesImageOne from './utilities/images/homes/homesOne.jpg';
import HousesImageTwo from './utilities/images/homes/homesTwo.jpg';
import HousesImageThree from './utilities/images/homes/homesThree.jpg';
import HousesImageFour from './utilities/images/homes/homesFour.jpg';
import HousesImageFive from './utilities/images/homes/homesFive.jpg';

export class Carousel extends Component {

  state = { 

  imageGallery: this.props.location.pathname.split('/').pop(),
  imagePathLeft: '',
  imagePathCenter: '',
  imagePathRight: '',

  carouselImageLeft: ImgInfo[this.props.location.pathname.split('/').pop()][4]["image_fileName"],
  carouselImageCenter: ImgInfo[this.props.location.pathname.split('/').pop()][0]["image_fileName"],
  carouselImageRight: ImgInfo[this.props.location.pathname.split('/').pop()][1]["image_fileName"],

  HousesImage: [ HousesImageOne, HousesImageTwo, HousesImageThree, HousesImageFour, HousesImageFive], 


  targetPositionLeft: 4,
  targetPositionCenter: 0,
  targetPositionRight: 1,
};

handleClickLeft = (e) => {
e.preventDefault();

const imageGalleryLength = ImgInfo[this.state.imageGallery].length - 1;
const gallery = this.state.imageGallery;
const pathLeft = ImgInfo[this.state.imageGallery][this.state.targetPositionLeft]["image_fileName"]; 
const pathCenter = ImgInfo[this.state.imageGallery][this.state.targetPositionCenter]["image_fileName"];
const pathRight = ImgInfo[this.state.imageGallery][this.state.targetPositionRight]["image_fileName"];  

if (this.state.targetPositionLeft === 0 ) {
    this.setState ({
      targetPositionLeft: imageGalleryLength,
      targetPositionCenter: 0,
      targetPositionRight: 1,

     
      carouselImageLeft: ImgInfo[this.state.imageGallery][imageGalleryLength]["image_fileName"],
      carouselImageCenter: ImgInfo[this.state.imageGallery][0]["image_fileName"],
      carouselImageRight: ImgInfo[this.state.imageGallery][1]["image_fileName"],

      imagePathLeft: require("./utilities/images/" + gallery + "/"+ pathLeft),
      imagePathCenter: require("./utilities/images/" + gallery + "/"+ pathCenter),
      imagePathRight: require("./utilities/images/" + gallery + "/"+ pathRight),

    });
  } else if (this.state.targetPositionRight === 0) {
    this.setState ({
      targetPositionLeft: 2,
      targetPositionCenter: 3,
      targetPositionRight: imageGalleryLength,


      
      carouselImageLeft: ImgInfo[this.state.imageGallery][2]["image_fileName"],
      carouselImageCenter: ImgInfo[this.state.imageGallery][3]["image_fileName"],
      carouselImageRight: ImgInfo[this.state.imageGallery][imageGalleryLength]["image_fileName"],

      imagePathLeft: require("./utilities/images/" + gallery + "/"+ pathLeft),
      imagePathCenter: require("./utilities/images/" + gallery + "/"+ pathCenter),
      imagePathRight: require("./utilities/images/" + gallery + "/"+ pathRight),
    });
  } 
  else if (this.state.targetPositionCenter === 0) {
     this.setState({
        targetPositionLeft: 3,
        targetPositionCenter: imageGalleryLength,
        targetPositionRight: 0,

        // imageGallery: this.props.location.pathname.split('/').pop(),
        carouselImageLeft: ImgInfo[this.state.imageGallery][3]["image_fileName"],
        carouselImageCenter: ImgInfo[this.state.imageGallery][imageGalleryLength]["image_fileName"],
        carouselImageRight: ImgInfo[this.state.imageGallery][0]["image_fileName"],

        imagePathLeft: require("./utilities/images/" + gallery + "/"+ pathLeft),
        imagePathCenter: require("./utilities/images/" + gallery + "/"+ pathCenter),
        imagePathRight: require("./utilities/images/" + gallery + "/"+ pathRight),
      });
  }
  else {
    this.setState ({
        targetPositionLeft: this.state.targetPositionLeft - 1,
        targetPositionCenter: this.state.targetPositionCenter - 1,
        targetPositionRight: this.state.targetPositionRight - 1,

        // imageGallery: this.props.location.pathname.split('/').pop(),
        carouselImageLeft: ImgInfo[this.state.imageGallery][this.state.targetPositionLeft - 1]["image_fileName"],
        carouselImageCenter: ImgInfo[this.state.imageGallery][this.state.targetPositionCenter - 1]["image_fileName"],
        carouselImageRight: ImgInfo[this.state.imageGallery][this.state.targetPositionRight - 1]["image_fileName"],

        imagePathLeft: require("./utilities/images/" + gallery + "/"+ pathLeft),
        imagePathCenter: require("./utilities/images/" + gallery + "/"+ pathCenter),
        imagePathRight: require("./utilities/images/" + gallery + "/"+ pathRight),

    });
  }
}

handleClickRight = (e) => {
e.preventDefault();
console.log("right");
console.log(this.state.targetPositionRight);
}
componentDidMount() {
  // const gallery = this.state.imageGallery;
  // const pathLeft = ImgInfo[this.state.imageGallery][this.state.targetPositionLeft]["image_fileName"]; 
  // const pathCenter = ImgInfo[this.state.imageGallery][this.state.targetPositionCenter]["image_fileName"];
  // const pathRight = ImgInfo[this.state.imageGallery][this.state.targetPositionRight]["image_fileName"];  

    this.setState( { 
      imagePathLeft: require("./utilities/images/" + this.state.imageGallery + "/"+ ImgInfo[this.state.imageGallery][this.state.targetPositionLeft]["image_fileName"]),
      imagePathCenter: require("./utilities/images/" + this.state.imageGallery + "/"+ ImgInfo[this.state.imageGallery][this.state.targetPositionCenter]["image_fileName"]),
      imagePathRight: require("./utilities/images/" + this.state.imageGallery + "/"+ ImgInfo[this.state.imageGallery][this.state.targetPositionRight]["image_fileName"]),
    }); 
}
  render() {

    return (
      
      <div className="carousel-box">
          <img className="left-img" src={this.state.carouselImageLeft} />
          <button className="btn-left" onClick={this.handleClickLeft} ></button>

          <img className="visible-img" src={this.state.imagePathCenter} />

          <button className="btn-right" onClick={this.handleClickRight} ></button>
          
          <img className="right-img" src={this.state.carouselImageRight} />

      </div>
    )
  }
}

export default Carousel