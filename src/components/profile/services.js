import React, { Component } from 'react';


export class Services extends Component {
state = {
      zIndex: 1,
      position: 0,
}

  render() {
    return (
      <div className="services-container">
          <div className="services-box"
            style={{
              zIndex: this.state.zIndex,
              right: this.state.position,
            }}
          >
          
            <p className="services-article">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <ul className="services-left">
                <li>left</li>
                <li>left</li>
                <li>left</li>
                <li>left</li>
                <li>left</li>
                <li>left</li>
                <li>left</li>
                <li>left</li>
                <li>left</li>
              </ul>

            <ul className="services-center">
                <li>centersflgh;slfdhg</li>
                <li>center</li>
                <li>center</li>
                <li>center</li>
                <li>center</li>
                <li>center</li>
                <li>center</li>
                <li>center</li>
                <li>center</li>
              </ul>

            <ul className="services-right">
                <li>right</li>
                <li>right</li>
                <li>right</li>
                <li>right</li>
                <li>right</li>
                <li>right</li>
                <li>right</li>
                <li>right</li>
                <li>right</li>
              </ul>
          </div>

          <span 
              className="services-span"
                style={{
                  background: this.props.spanColor,
                  right: this.props.spanServicesPosition,
                  transition: this.props.duration,
                  }}></span>
      </div>
    )
  }
}

export default Services;
