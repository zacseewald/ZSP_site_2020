
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import img from './utilities/images/homes/homesTwo.jpg';

import ImgInfo from './utilities/image.json';



export class test extends Component {
  
  state = {
    imagePathName: process.env.PUBLIC_URL + '/images/' + 'landing' + '/' + ImgInfo.landing[0]["image_fileName"],
}

  render() {
    console.log(this.state.imagePathName);
    return (
      <div className="body-box"
      >
        <img 
          // src={'./utilities/images/homes/homesTwo.jpg'}
          src={img}
          alt='new' 
          style={{
            height: "200px",
            width: "200px",
            objectFit: "cover",
          }}
          />
          <img
            src={process.env.PUBLIC_URL + this.state.imagePathName}
            alt="Animal"
            style={{ height: "300px" }}
          />
      </div>
    )
  }
}

export default test
