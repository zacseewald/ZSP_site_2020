import React, { Component } from 'react';


export class carouselThumbsLoader extends Component {

    state = {

        imgThumbPathArr: [],
        thumbPath: this.props.src,
          //image visablility
        hiddenIMG: "none",
        visibleIMG: "",
    }

    handleThumbLoader(imgPathArr) {
      return (
          <div className="carouselIMGCompiler-Child-img" >
              <img className="carouselIMGCompiler-visible-img" 
                  src={imgPathArr} 
                  alt="Whatever" 
                  style={{display: this.state.visibleIMG}} ></img>
              </div>
      )
      // .then(console.log("what?"))
  }


  render() {
    // console.log(this.props.array[0])
    return (
      <div>
        <h1>hey</h1>
        {/* <img src={this.props.thum[0]} ></img> */}
        {/* {this.props.thumbnails.map(imageUrl => this.handleThumbLoader(imageUrl))} */}
        {/* <img src={this.props.thumbnails[0]} alt="asdkfjg"></img> */}
  </div>
    )
  }
}

export default carouselThumbsLoader