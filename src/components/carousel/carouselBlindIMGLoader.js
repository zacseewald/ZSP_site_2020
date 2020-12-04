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
                <img className="carouselIMGCompiler-visible-img" 
                    src={imgPathArr} 
                    alt="Whatever" 
                    style={{display: this.state.hiddenIMG}} ></img>
                </div>
        )
        // .then(console.log("what?"))
    }


  render() {

    return (
      <div>
          {this.props.imgPathArr.map(imageUrl => this.handleImgLoader(imageUrl))}
      </div>
    )
  }
}

export default carouselBlindIMGLoader