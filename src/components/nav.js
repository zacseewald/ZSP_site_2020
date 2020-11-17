import React, { Component } from 'react';
import Follow from './follow';

export class Nav extends Component {
  state = {
            isClicked: true, //nav
            displayNav: "none", // nav
            lineH: "",
            lineW: "",
            isClickedBTN: false,// nav btn
            display: "block", // nav btn
            centerBarmargin: ".44em",
            background: "",
            hamburgerBackground: "",
            imageGalleryName: this.props.gallery,
        }
// Handling the button behavior and the nav behavior
    handleNavButton = (e) => {
        e.preventDefault();

        if(this.props.gallery === "landing") {
          !this.state.isClicked 
          ? 
          this.setState({
            isClickedBTN: true,
            centerBarmargin: ".44em",
            lineH: "4px",
            lineW: "36px",
            isClicked: true,
            displayNav: "none",
            display: "block",
            background: "#00eaff",
          })
          :
          this.setState({
            display: "none",
            isClickedBTN: false,
            centerBarmargin: "25%",
            lineH: "36px",
            lineW: "4px",
            isClicked: false,
            displayNav: "block",
            backgroundColor: "rgba(000, 000, 000, .85)",
            background: "#00eaff",
          });
        } else {
            !this.state.isClicked 
            ? 
            this.setState({
              isClickedBTN: true,
              centerBarmargin: ".44em",
              lineH: "4px",
              lineW: "36px",
              isClicked: true,
              displayNav: "none",
              display: "block",
              background: "#303030",

            })
            :
            this.setState({
              display: "none",
              isClickedBTN: false,
              centerBarmargin: "25%",
              lineH: "36px",
              lineW: "4px",
              isClicked: false,
              displayNav: "block",
              backgroundColor: "rgba(000, 000, 000, .85)",
              background: "#00eaff",
            });
        }
      }
      // Resets the nav state when there is a click anywhere on the screen
      resetNav = (e)  => {
        e.preventDefault();
        if(this.props.gallery === "landing") {
          this.setState({ 
            isClicked: true, //nav
            displayNav: "none", // nav
            lineH: "4px",
            lineW: "36px",
            isClickedBTN: false,// nav btn
            display: "block", // nav btn
            centerBarmargin: ".34em",
            background: "#00eaff",
          })
        } else {
          this.setState({
            isClicked: true, //nav
            displayNav: "none", // nav
            lineH: "4px",
            lineW: "36px",
            isClickedBTN: false,// nav btn
            display: "block", // nav btn
            centerBarmargin: ".34em",
            background: "#303030",
          })
        }
      }

      componentDidMount() {
        if(this.props.gallery === "landing") {
          this.setState({
            lineH: "4px",
            lineW: "36px",
            background: "#00eaff",
            hamburgerBackground: "rgba(0,0,0,0.15)",
          })
        } else {
          this.setState({
            lineH: "4px",
            lineW: "36px",
            background: "#303030",
            hamburgerBackground: "transparent",
          })
        }

      }
    
  render() {
    return (
      <div className="nav-btn-parent" style={{ background: this.state.backgroundColor }}>
        <Follow 
          color={this.state.background}
         />
        <div onClick={this.handleNavButton}>

        <div className="button-border" onClick={this.handleNavButton} style={{
          position: this.state.navBtnPosition,
          background: this.state.hamburgerBackground,
        }}>

            <div  className="button-line-top"style={{ 
              // backgroundColor: this.state.bgColor, 
              height: this.state.lineH, 
              width: this.state.lineW, 
              display: this.state.display, 
              background: this.state.background,
              }}></div>

            <div  className="button-line-center"style={{ 
              // backgroundColor: this.state.bgColor, 
              height: this.state.lineH, 
              width: this.state.lineW, 
              marginTop: this.state.centerBarmargin,
              background: this.state.background,
              }}></div>

            <div  className="button-line-bottum"style={{ 
              // backgroundColor: this.state.bgColor, 
              height: this.state.lineH, 
              width: this.state.lineW, 
              display: this.state.display, 
              background: this.state.background,
              }}></div>
            </div>
          </div>    

        <div className="nav-page" style={{ 
            backgroundColor: this.state.backgroundColor, 
            display: this.state.displayNav 
          }}>
           
          <div className="link-body">
            <h1 className="link-nav-BTN"><a href="homes">dwellings</a></h1>
            <h1 className="link-nav-BTN"><a href="buildings">buildings</a></h1>
            {/* <h1 className="link-nav-BTN"><a href="#">Drone</a></h1> */}
            {/* <h1 className="link-nav-BTN"><a href="#">Sky Rise</a></h1> */}
            {/* <h1 className="link-nav-BTN"><a href="profile">Profile</a></h1> */}
            {/* <h1 className="link-nav-BTN"><a href="test">test</a></h1> */}
            <h1 className="link-nav-BTN"><a href="/">back</a></h1>
            <h1 className="link-nav-BTN"><a href={"mailto: zac@zacseewaldphotography.com"}>contact</a></h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;