import React, { Component } from 'react';

export class Nav extends Component {
  state = {
            isClicked: true, //nav
            displayNav: "none", // nav
            navBtnPosition: "absolute", //nav
           // need to fix the height of the background for the nav when clicked
            backgroundColor: "transparent",
            lineH: ".18em",
            lineW: "30px",
            isClickedBTN: false,// nav btn
            display: "block", // nav btn
            centerBarmargin: ".34em",
        }
// Handling the button behavior and the nav behavior
    handleNavButton = (e) => {
        e.preventDefault();
        !this.state.isClicked 
        ? 
        this.setState({
          isClickedBTN: true,
          centerBarmargin: ".34em",
          lineH: ".18em",
          lineW: "30px",
          isClicked: true,
          displayNav: "none",
          navBtnPosition: "absolute", //nav
          backgroundColor: "transparent",
          display: "block",
        })
        :
        this.setState({
          display: "none",
          isClickedBTN: false,
          centerBarmargin: "25%",
          lineH: "30px",
          lineW: ".19em",
          isClicked: false,
          displayNav: "block",
          navBtnPosition: "fixed",
          backgroundColor: "rgba(000, 000, 000, .85)",
        });
      }
      // Resets the nav state when there is a click anywhere on the screen
      resetNav = (e)  => {
        this.setState({ 
          isClicked: true, //nav
          displayNav: "none", // nav
          backgroundColor: "transparent",
          // bgColor: "pink",
          lineH: ".18em",
          lineW: "30px",
          isClickedBTN: false,// nav btn
          display: "block", // nav btn
          centerBarmargin: ".34em",
         })
      }
    
  render() {
    return (
      <div style={{ background: this.state.backgroundColor }}>
        <div onClick={this.handleNavButton}>

        <div className="button-border" onClick={this.handleNavButton} style={{
          position: this.state.navBtnPosition,
        }}>

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
          </div>    

        <div className="nav-page" style={{ backgroundColor: this.state.backgroundColor, display: this.state.displayNav }}>
           
          <div className="link-body">
            <h1 className="link-nav-Home"><a href="/">Home</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Commercial</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Residencial</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Drone</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Sky Rise</a></h1>
            <h1 className="link-nav-BTN"><a href="#">About</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Services</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Contact</a></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;