import React, { Component, lazy, Suspense } from 'react';
import ImgInfo from '../utilities/image.json';



const CarouselVISimgGen = lazy(() => import('./carouselVISimgGen'));

const CarouselBlindIMGLoader = lazy(() => import('./carouselBlindIMGLoader'));





export class carouselIMGCompiler extends Component {

  
    state = {
    img: ImgInfo[this.props.gallery][0]["image_fileName"],
    imageGalleryName: this.props.gallery,
    imgPath: process.env.PUBLIC_URL  + '/images/' + this.props.gallery,
    imgPathThumbs: process.env.PUBLIC_URL  + '/images/' + this.props.gallery + "/thumbnails/",
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

handleStageredImageLoading () {

    
}

  componentDidMount() {
        const imgPathArr = []; 
        const thumbnailArr = [];

        ImgInfo[this.props.gallery].forEach(element => imgPathArr.push(this.state.imgPath + "/" + element["image_fileName"]));
        ImgInfo[this.props.gallery].forEach(element => thumbnailArr.push(this.state.imgPath + "/thumbnails/" + element["image_thumbnail"]));

        this.setState({
            imgPathArr: imgPathArr,
            thumbnailArr: thumbnailArr,
        });

    }

    render() {
        
      return ( 
        <div className="carouselIMGCompiler-Parent" >


            <Suspense fallback={
                <div className="carouselIMGCompiler-Fallback">Loading...</div>
            
            }>
                
                
                <CarouselVISimgGen
                    src={this.state.imgPathArr[this.props.counter]} 
                    alt={this.props.alt}
                    />
                       <CarouselBlindIMGLoader 
                    imgPathArr={this.state.imgPathArr}
                    />

                    </Suspense>
            </div>
      )
    }
  }

  export default carouselIMGCompiler;