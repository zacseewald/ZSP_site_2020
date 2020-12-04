import React, { Component, lazy, Suspense } from 'react';
import ImgInfo from '../utilities/image.json';

// import CarouselThumbsLoader  from './carouselThumbsLoader';

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
        // .then(console.log("what?"))
    }
// ReactDOM.render(element, document.getElementById('root'));
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

        // console.log(this.state.thumbnailArr)
    }

    render() {
        // console.log(this.props.)
      return ( 
        <div className="carouselIMGCompiler-Parent" >

            {/* {this.handleStageredImageLoading()} */}

            {/* <CarouselThumbsLoader 
                    src={this.state.imgPathThumbs}
                    array={this.state.thumbnailArr}
                /> */}
            {/* This is the visible image */}
            <Suspense fallback={
                <h1>Loading</h1>
            // <img src={this.state.thumbnailArr} alt="ewrkjtg"></img>
            }>
                
                
                <CarouselVISimgGen
                    src={this.state.imgPathArr[this.props.counter]} 
                    alt={this.props.alt}
                    />
                       <CarouselBlindIMGLoader 
                    imgPathArr={this.state.imgPathArr}
                    />

                    </Suspense>


            {/* <Suspense fallback={<div>blind images are loading...</div>}>
                    <CarouselBlindIMGLoader 
                    imgPathArr={this.state.imgPathArr}
                    />
                    </Suspense> */}
            {/* These are the images that are loaded but are hidden */}
            {/* {this.state.imgPathArr.map(imageUrl => this.handleImgLoader(imageUrl))} */}
            </div>
      )
    }
  }

  export default carouselIMGCompiler;