import React, { Component } from 'react';


export class Nav extends Component {
  state = {
            isClicked: true, //nav
            displayNav: "none", // nav
            lineH: "1px",
            lineW: "20px",
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
          lineH: "1px",
          lineW: "20px",
          isClicked: true,
          displayNav: "none",
          display: "block",
        })
        :
        this.setState({
          display: "none",
          isClickedBTN: false,
          centerBarmargin: "25%",
          lineH: "20px",
          lineW: "1px",
          isClicked: false,
          displayNav: "block",
          backgroundColor: "rgba(000, 000, 000, .85)",
        });
      }
      // Resets the nav state when there is a click anywhere on the screen
      resetNav = (e)  => {
        this.setState({ 
          isClicked: true, //nav
          displayNav: "none", // nav
          lineH: "1px",
          lineW: "20px",
          isClickedBTN: false,// nav btn
          display: "block", // nav btn
          centerBarmargin: ".34em",
         })
      }
    
  render() {
    return (
      <div className="nav-btn-parent" style={{ background: this.state.backgroundColor }}>
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

        <div className="nav-page" style={{ 
            backgroundColor: this.state.backgroundColor, 
            display: this.state.displayNav 
          }}>
           
          <div className="link-body">
            <h1 className="link-nav-BTN"><a href="homes">Homes</a></h1>
            <h1 className="link-nav-BTN"><a href="buildings">Buildings</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Drone</a></h1>
            <h1 className="link-nav-BTN"><a href="#">Sky Rise</a></h1>
            <h1 className="link-nav-BTN"><a href="profile">Profile</a></h1>
            <h1 className="link-nav-BTN"><a href="test">test</a></h1>
            <h1 className="link-nav-BTN"><a href="/">Back</a></h1>
            <h1 className="link-nav-BTN"><a href={"mailto: zac@zacseewaldphotography.com"}>Contact</a></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;