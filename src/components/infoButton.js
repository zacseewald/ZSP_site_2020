import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';
import InstagramImg from './utilities/graffics/socialMedia/instagram.png';
import LinkedInImg from './utilities/graffics/socialMedia/linkedIn.png';
import TwitterImg from './utilities/graffics/socialMedia/twitter.png';


export class infoButton extends Component {
  state = {
            opacity: 0,
            isClicked: false,
            // Lets the page know which image is being loaded into the background.
            imgIndexValue: this.props.index, 
            // Image details that get loading into the approproate locations in the page below.
            archName: ImgInfo.landing[this.props.index]["architect_name"],
            archSite: ImgInfo.landing[this.props.index]["architect_site"],
            imgLocation: ImgInfo.landing[this.props.index]["location_city_state"],
            imgStory: ImgInfo.landing[this.props.index]["story"],

            
       // state  for the up/down arrow button   
            transformOrigin: "center center",
            transformRight: "rotate(35deg)",
            transformLeft: "rotate(-35deg)",
            transition: "all 1.5s cubic-bezier(.5,1.8,.2,.5)",
            trasitionInfoContainer: ".5s",
            position: "94vh auto",

            arrowTop: "",
            arrowBottom: "-9px",

            gradientHeight: "7vh",
            positionInfoBoxTop: "100vh",//top
            positionInfoBoxBottom: "-110px",//Bottom
            shadow: "0px 0px 49px 38px rgba(0,0,0,0)",
            
            // Social media links and button states
            instagram: "https://www.instagram.com/zsphotog/",
            linkedin: "#",
            twitter: "#",
            socContainerPositionHeight: "13vh",
        }
  
handleArrowClick = (e) => {
    
    if (!this.state.isClicked){
        this.setState({
            isClicked: true,
            transformRight: "rotate(-35deg)",
            transformLeft: "rotate(35deg)",
            positionInfoBoxBottom: "-1px",
            arrowTop: "",
            arrowBottom: "96px",
            gradientHeight: "14vh",
            trasitionInfoContainer: ".5s",
            shadow: "7px -3px 47px 24px rgba(230,230,230,0.67)",

        })} else {
            this.setState({
                isClicked: false,
                transformRight: "rotate(35deg)",
                transformLeft: "rotate(-35deg)",
                positionInfoBoxBottom: "-110px",
                arrowTop: "",
                arrowBottom: "-9px",
                gradientHeight: "7vh",
                trasitionInfoContainer: ".5s",
                shadow: "0px 0px 49px 38px rgba(0,0,0,0)",
        })}
}

    render() {
     
        return (

            <div className="info-button-parent-box" >

                {/* info button arrow up and down */}
                <div className="arrow-up" 
                    style={{
                        height: this.state.gradientHeight,
                        transition: this.state.transition,
                    }}>
                    
                    <a className="arrow-icon" 
                        onClick={this.handleArrowClick} 
                        style={{
                            // margin: this.state.position,
                            transition: this.state.trasitionInfoContainer,
                            bottom: this.state.arrowBottom,
                        }}>
                            
                            <span className="left-bar" 
                                style={{
                                    backgroundColor: this.state.arrowColor,
                                    transformOrigin: this.state.transformOrigin,
                                    transform: this.state.transformLeft,
                                    transition: this.state.transition,
                                    boxShadow: this.state.shadow,
                                }}></span>
                            <span className="right-bar"
                                style={{
                                    transformOrigin: this.state.transformOrigin,
                                    transform: this.state.transformRight,
                                    transition: this.state.transition,
                                }}></span>
                        </a>

                </div>

                {/* all the info that lives in info container */}
                <div className="info-container" 
                    style={{
                        color: this.state.color,
                        // top: this.state.positionInfoBoxTop,
                        bottom: this.state.positionInfoBoxBottom,
                        transition: this.state.trasitionInfoContainer,
                    }}>
                    <h2 className="image-title-main" 
                        style={{
                                color: this.state.color,
                            }}>IMAGE INFO</h2>
                    <div className="image-archtect"
                        style={{
                                color: this.state.color,
                            }}>
                                    <h3 className="title-architect" >ARCHITECT: </h3>
                                    <h3 className="name-architect" >
                                        <a href={this.state.archSite} >
                                            {this.state.archName}
                                            </a>
                                    </h3>
                        </div>
                    <div className="image-location"
                      style={{
                            color: this.state.color,
                        }}>
                            <h3 className="title-location" >LOCATION: </h3>
                            <h3 className="name-location" >{this.state.imgLocation}</h3>
                        </div>

                    <div className="image-story"
                        style={{
                             color: this.state.color,
                        }}>
                                <p className="image-story">©ZAC SEEWALD; 2020. All rights reserved.</p>
                        </div>
                        
                    {/* social media links */}

                    <div className="social-media-container"
                        style={{
                            bottom: this.state.socContainerPositionHeight,
                            // transition: this.state.trasitionInfoContainer,
                        }}>
                        <a className="instagram-link" href={this.state.instagram}>
                            <img className="instagram-logo" src={InstagramImg} alt="View my Instagram page here" />
                            </a>
                        <a className="linkedin-link" href={this.state.linkedin}>
                            <img className="linkedin-logo" src={LinkedInImg} alt="View my LinkedIn page here" />
                            </a>
                        <a className="twitter-link" href={this.state.twitter}>
                            <img className="twitter-logo" src={TwitterImg} alt="View my Twitter page here" />
                            </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default infoButton
