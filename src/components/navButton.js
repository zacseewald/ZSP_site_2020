import React, { Component } from 'react';
// import './index.css';

export class NavButton extends Component {
state = {
    lineH: ".3vw",
    lineW: "4vw",
    isClickedBTN: false,
    display: "block",
    centerBarmargin: "0.6vw",
}

handleClick = (e) => {
  e.preventDefault();
  !this.state.isClickedBTN ? this.setState({
    display: "none",
    isClickedBTN: true,
    centerBarmargin: "25%",
    lineH: "4vw",
    lineW: ".35vw",
  })
  :
  this.setState({
    display: "block",
    isClickedBTN: false,
    centerBarmargin: "0.6vw",
    lineH: ".3vw",
    lineW: "4vw",
  })
  console.log(this.state.isClickedBTN)
}

  render() {
    return (
      <div className="button-border" onClick={this.handleClick}>

         <div  className="button-line-top"style={{ 
           backgroundColor: this.state.bgColor, 
           height: this.state.lineH, 
           width: this.state.lineW, 
           display: this.state.display, 
           }}></div>

         <div  className="button-line-center"style={{ 
           backgroundColor: this.state.bgColor, 
           height: this.state.lineH, 
           width: this.state.lineW, 
           marginTop: this.state.centerBarmargin
           }}></div>

         <div  className="button-line-bottum"style={{ 
           backgroundColor: this.state.bgColor, 
           height: this.state.lineH, 
           width: this.state.lineW, 
           display: this.state.display, 
           }}></div>
      </div>
    )
  }
}

export default NavButton;