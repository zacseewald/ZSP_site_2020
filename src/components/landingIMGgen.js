import React, { Component } from 'react';

export class landingIMGgen extends Component {
  render() {
      
    return (
      <div className="landingIMGgen-parent-box">
         <img className="bgImage" 
              src={this.props.src}
              alt={this.props.alt}
            />
      </div>
    )
  }
}

export default landingIMGgen

// this component generates the background image based on the props sent down from the landing.js component.