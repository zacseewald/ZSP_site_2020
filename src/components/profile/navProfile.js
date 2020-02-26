import React, { Component } from 'react'



export class NavProfile extends Component {
  render() {
    return (
      <div className="navProfile-link-container">
          <button className="navProfile-about-link"><a href="#">ABOUT</a></button>
          <button className="navProfile-services-link"><a href="#">SERVICES</a></button>
          <button className="navProfile-client-link"><a href="#">CLIENT</a></button>
      </div>
    )
  }
}

export default NavProfile;