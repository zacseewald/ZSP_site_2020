import React, { Component } from 'react';


export class carouselBlindIMGLoader extends Component {

    state = {
        imgPathArr: this.props.imgPathArr,
          //image visablility
        hiddenIMG: "none",
        visibleIMG: "",
    }

    handleImgLoader(imgPathArr) {
        return (
            <div className="carouselIMGCompiler-Child-img" >
                <img className="carouselIMGCompiler-blind-img" 
                    src={imgPathArr} 
                    alt="Whatever" >
                    </img>
                </div>
        )
    }


  render() {

    return (
      <div>
          {this.props.imgPathArr.map(imageUrl => this.handleImgLoader(imageUrl))}
          {/* <span className="carouselIMGCompiler-span-img"></span> */}
      </div>
    )
  }
}

export default carouselBlindIMGLoader