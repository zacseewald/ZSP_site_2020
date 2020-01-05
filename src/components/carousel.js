// This is the carousel constructor to show images
import React, { Component } from 'react';
import HousesImageOne from './utilities/images/homes/one.jpg';
import HousesImageTwo from './utilities/images/homes/two.jpg';
import HousesImageThree from './utilities/images/homes/three.jpg';
import HousesImageFour from './utilities/images/homes/four.jpg';
import HousesImageFive from './utilities/images/homes/five.jpg';

export class Carousel extends Component {

  state = { 
  // array of images for the houses carousel
  HousesImage: [ HousesImageOne, HousesImageTwo, HousesImageThree, HousesImageFour, HousesImageFive], 

  targetPositionLeft: 4,
  targetPositionCenter: 0,
  targetPositionRight: 1,
};

handleClickLeft = (e) => {
e.preventDefault();

if (this.state.targetPositionLeft === 0 ) {
    this.setState ({
      targetPositionLeft: 4,
      targetPositionCenter: 0,
      targetPositionRight: 1,
    });
  console.log("left " + this.state.targetPositionLeft);
  console.log("center " + this.state.targetPositionCenter); 
  console.log("right " + this.state.targetPositionRight);


  } else if (this.state.targetPositionRight === 0) {
    this.setState ({
      targetPositionLeft: 2,
      targetPositionCenter: 3,
      targetPositionRight: 4,
    });
  } 
  
  else if (this.state.targetPositionCenter === 0) {
     this.setState({
        targetPositionLeft: 3,
        targetPositionCenter: 4,
        targetPositionRight: 0,
      });
  console.log("left " + this.state.targetPositionLeft);
  console.log("center " + this.state.targetPositionCenter); 
  console.log("right " + this.state.targetPositionRight);
  
  }

  else {
    this.setState ({
       targetPositionLeft: this.state.targetPositionLeft - 1,
        targetPositionCenter: this.state.targetPositionCenter - 1,
        targetPositionRight: this.state.targetPositionRight - 1,
    });
  }




}

handleClickRight = (e) => {
e.preventDefault();
console.log("right");
console.log(this.state.targetPositionRight);

}

  render() {

   console.log("left " + this.state.targetPositionLeft);
  console.log("center " + this.state.targetPositionCenter); 
  console.log("right " + this.state.targetPositionRight);

    return (
      
      <div className="carousel-box">
          <img className="left-img" src={this.state.HousesImage[this.state.targetPositionLeft]} />
          <button className="btn-left" onClick={this.handleClickLeft} ></button>

          <img className="visible-img" src={this.state.HousesImage[this.state.targetPositionCenter]} />

          <button className="btn-right" onClick={this.handleClickRight} ></button>
          
          <img className="right-img" src={this.state.HousesImage[this.state.targetPositionRight]} />

      </div>
    )
  }
}

export default Carousel