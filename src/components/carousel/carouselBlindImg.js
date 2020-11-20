
import React, { Component } from 'react';
import ImgInfo from "../utilities/image.json";


export class carouselBlindImg extends Component {
  
  state = {
     imgPath: "",
     gallery: this.props.gallery,
     image: 0,
     counterBlindImgNext: this.props.imgNum,
    //  counterBlindImgNextPlusOne: this.props.imgNum + 2,
}

componentDidMount() {
    // const imgFileName = ImgInfo[this.state.imageGalleryName][this.state.clickCounter]["image_fileName"];
    this.setState({
        image: ImgInfo[this.state.gallery].length,
    })
    
    
}

  render() {
    console.log(this.props.galleryArrOfImages)
    return (
      <div className="carouselBlindImg-parent-box">
        <h1 className="carouselBlindImg" >{this.state.gallery}</h1>
        <img className="carouselBlindImg-invisible-img" src={this.props.galleryArrOfImages[0]}  />
        </div>
    )
  }
}

export default carouselBlindImg