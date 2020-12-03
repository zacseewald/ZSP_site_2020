import React, { Component, lazy, Suspense } from 'react';
import ImgInfo from '../utilities/image.json';



export class carouselIMGCompiler extends Component {

  
    state = {
    img: ImgInfo[this.props.gallery][0]["image_fileName"],
    imageGalleryName: this.props.gallery,
    imgPath: process.env.PUBLIC_URL  + '/images/' + this.props.gallery,
    imgPathArr: [],

    //image visablility
    hiddenIMG: "none",
    
  }


  handleImgLoader(imgPathArr) {
        return (
            <div className="carouselIMGCompiler-Child-img" >
                <img className="carouselIMGCompiler-visible-img" 
                    src={imgPathArr} 
                    alt="Whatever" 
                    style={{display: this.state.hiddenIMG}} ></img>
                </div>
        )
    }


    handleImgDisplay(imgPathArr) {
        console.log(imgPathArr)
        // const visableIMG = imgPathArr[0];

        // return (
        //     <div className="carouselIMGCompiler-Child-img" >
        //     <img className="carouselIMGCompiler-visible-img" 
        //         src={visableIMG} 
        //         alt="Whatever" 
        //         style={{display: this.state.displayIMG}} ></img>
        //     </div>
        // )
    }
  
  componentDidMount() {
        const imgPathArr = []; 

        ImgInfo[this.props.gallery].forEach(element => imgPathArr.push(this.state.imgPath + "/" + element["image_fileName"]));

        this.setState({
            imgPathArr: imgPathArr,
        });
    }

    render() {

      return (
        <div className="carouselIMGCompiler-Parent" >
            {/* This is the visible image */}
            <img className="carouselIMGCompiler-visableIMG" 
                src={this.state.imgPathArr[this.props.counter]} 
                alt={this.props.alt}
                ></img>
            {/* These are the images that are loaded but are hidden */}
            {this.state.imgPathArr.map(imageUrl => this.handleImgLoader(imageUrl))}
            </div>
      )
    }
  }

  export default carouselIMGCompiler;