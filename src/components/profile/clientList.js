import React, { Component } from 'react'



export class clientList extends Component {

  state = {
      zIndex: 0,
    }
  render() {
    
    return (
      <div className="clientList-box"
      style={{
        zIndex: this.state.zIndex,
        right: this.props.position,
        transition: this.props.duration,
      }}
      >
      
        <p className="clients-article">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <ul className="clientList-left">
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

        <ul className="clientList-center">
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

        <ul className="clientList-right">
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
    )
  }
}

export default clientList;