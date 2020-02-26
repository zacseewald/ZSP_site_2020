import React, { Component } from 'react'



export class about extends Component {

state = {
      zIndex: 1,
      clickStatus: this.props.clickStatus,
}

  render() {
    return (
      <div className="about-box"
        style={{
           zIndex: this.state.zIndex,
           right: this.props.position,
           transition: this.props.duration,
          }}
      >
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

export default about;
