// This is a testing component to show that you can have specific styles associated to a designated component. instead of using the system of having the index.js and index.css files in the component folder, they are separated into 2 folders. One for the component.js and the other for stylessheet.scss. This allows for better readability and control over styles. They load into App.js and are then thrown in to the main index.html

// Components_name.js should always be placed in the components folder. App.js should ne the only JS component file outside in the main directory.

import React, { Component } from 'react'

export class testTwo extends Component {

  state = {
    display: "none",
    isClicked: true,
  }

  handleButtonClick = (e) => {
    e.preventDefault();
    if (!this.isClicked) {
        this.setState({
          display: "block",
          isClicked: "true",
        });
    } 
  }
  handleButtonClose = (e) => {
    e.preventDefault();
    if (!this.isClicked) {
      this.setState({
        display: "none",
        isClicked: "false",
      });
  } 
  }
  render() {
    return (
      <div>
{/* this is the modal */}
        <div id="modal-parent" style={{ display: this.state.display }}>
          <h1 id="modal-child">This button and modal lives on testTwo.js</h1>
          <button id="modal-close" style={{ display: this.state.display}} 
            onClick={this.handleButtonClose}>Close!
          </button>
        </div>
{/* this is the static text */}
        <div className="parent-testTwo">
            <h1 id="h1-testTwo">testTwo.js Component</h1>
            <button id="ex-btn" 
              onClick={this.handleButtonClick}>Example Button
            </button>
        </div>
      </div>
    )
  }
}

export default testTwo
