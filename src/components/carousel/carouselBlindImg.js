
import React, { Component } from 'react';
import ImgInfo from "../utilities/image.json";



export class carouselBlindImg extends Component {
  
  state = {
     
     imgPath: "",
     gallery: this.props.gallery,
     image: 0,
     counterBlindImgNext: this.props.imgNum,
     imgPathArr: [],
     inititialImgLoader: [],

};

componentDidMount() {

    const imgPathArr = [];
    const imgPath = process.env.PUBLIC_URL  + '/images/' + this.state.gallery + '/';
 
    // ImgInfo[this.state.gallery].forEach(element => imgPathArr.push(imgPath + element["image_fileName"]));
    ImgInfo[this.state.gallery].forEach(element => console.log("whatever"));

    this.setState({
        imgPath: "./images/" + this.state.gallery + "/" + ImgInfo[this.state.gallery][1]["image_fileName"],
        imgPathArr: imgPathArr,
        inititialImgLoader: ["./images/" + this.state.gallery + "/" + ImgInfo[this.state.gallery][1]["image_fileName"], "./images/" + this.state.gallery + "/" + ImgInfo[this.state.gallery][2]["image_fileName"]],

    })
    
}


imgLoader(imgPathArr) {

    return (
        <div className="carouselBlindImg-child-box">
            <img className="carouselBlindImg-image-preLoaded" src={imgPathArr} alt="whatevs" />
        </div>
    )
}

  render() {
    return (
        
      <div className="carouselBlindImg-parent-box">
          {this.state.imgPathArr.map(imageUrl => this.imgLoader(imageUrl))}
          
        </div>
    )
  }
}



export default carouselBlindImg