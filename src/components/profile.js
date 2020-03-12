import React, { Component } from 'react';
import About from './profile/about';
import Clients from './profile/clientList';
import Services from './profile/services';
import ImageBG from './utilities/images/about.jpg';
import InstagramImg from './utilities/graffics/socialMedia/instagram.png';
import LinkedInImg from './utilities/graffics/socialMedia/linkedIn.png';
import TwitterImg from './utilities/graffics/socialMedia/twitter.png';
import EmailImg from './utilities/graffics/socialMedia/email.png';



export class Profile extends Component {

  state = {
    colorAbout: "#f5f5f5",
    spanAboutPosition: "10px",
    spanAboutColor: '#91f1f9',
    spanColor: '#91f1f9',

    colorClients: '#91f1f9',
    spanClientsPosition: "10px",

    colorServices: '#91f1f9',
    duration: "all 750ms cubic-bezier(0.510, -0.260, 0.400, 1.275)",
    durationSocMedia: "2s",
    durationLogoChanges: '.5s',
    linkName: "about",
    positionAbout: 0,
    positionClients: 0,

    colorLogoZS: "#c23c3e",
    colorLogoPhotog: "#999",


// SOCIAL MEDIA LINKS
    instagramLink: "#",
    linkedInLink: "#",
    twitterLink: "#",
    emailLink: "#",
    colorSocialMedBG: '#91f1f9',
  }
  
// handles the style changes onclick of the about link
handleProfileLinkAbout = (e) => {
    e.preventDefault();

    this.setState({
      colorAbout: "#f5f5f5",
      spanAboutColor: '#91f1f9',
      spanAboutPosition: '10px',


      colorClients: '#91f1f9',
      spanClientsPosition: "10px",
      

      colorServices: '#91f1f9',
      spanServicesPosition: "10px",

      colorLogo: "#f5f5f5",

      linkName: "about",
      positionAbout: 0,
      positionClients: 0,
      spanServicesPosition: '10px',
      colorSocialMedBG: '#91f1f9',
      colorLogoZS: "#c23c3e",
      colorLogoPhotog: "#888",
    });
}
// handles the style changes onclick of the client link
handleProfileLinkClients = (e) => {
  e.preventDefault();
  
  this.setState({
    colorAbout: '#798d7e',
    colorClients:"#f5f5f5",
    colorServices: '#798d7e',
    linkName: "clients",
    positionAbout: '-90vw',
    positionClients: 0,
    spanAboutPosition: '-90vw',
    spanClientsPosition: "10px",
    colorSocialMedBG: '#91f1f9',
    colorLogoZS: "#c23c3e",
    colorLogoPhotog: "#888",
  });
}
// handles the style changes onclick of the services link
handleProfileLinkServices = (e) => {
  e.preventDefault();
  
  this.setState({
    colorAbout: '#777',
    colorClients:"#777",
    colorServices: "#91f1f9",
    linkName: "services",
    positionAbout: '-90vw',
    positionClients: '-90vw',
    spanAboutPosition: '-90vw',
    spanClientsPosition: "-90vw",
    colorSocialMedBG: '#777',
    colorLogoZS: "#91f1f9",
    colorLogoPhotog: "#f5f5f5",
  });
}
  render() {
   
    return (
      //Master container for the company profile section
      <div className="profile-box">
          {/* About link */}
          <h1 className="about-title">
            <a 
              id="link"
              href="profile" 
              onClick={this.handleProfileLinkAbout}
              style={{
                color: this.state.colorAbout,
                transition: this.state.duration,
              }}>ABOUT</a>T</h1>
          {/* Client link */}
          <h1 className="client-title" >
            <a 
              id="link" 
              href="profile" 
              onClick={this.handleProfileLinkClients} 
              style={{
                color: this.state.colorClients,
                transition: this.state.duration,
              }}>CLIENTS</a></h1>
          {/* Services link */}
          <h1 className="services-title">
            <a 
              id="link" 
              onClick={this.handleProfileLinkServices} 
              href="profile" style={{
                color: this.state.colorServices,
                transition: this.state.duration,
              }}>SERVICES</a></h1>
          {/* About component => exports props of styles for the about information. The component handles the style changes through these supplied props.*/}
          <About 
              clickStatus={this.state.isClickedAbout}
              link={this.state.linkName}
              position={this.state.positionAbout}
              duration={this.state.duration}
              spanAboutPosition={this.state.spanAboutPosition}
              />
          {/* Clients component => exports props of styles for the client information. The component handles the style changes through these supplied props.*/}
          <Clients 
              clickStatus={this.state.isClickedClient} 
              link={this.state.linkName}
              position={this.state.positionClients}
              duration={this.state.duration}
              spanClientsPosition={this.state.spanClientsPosition}
              />
          {/* Services component => exports props of styles for the services information. The component handles the style changes through these supplied props.*/} 
          <Services 
              clickStatus={this.state.isClickedServices} 
              link={this.state.linkName}
              spanServicesPosition={this.state.spanServicesPosition}
               />
          {/* Image for the background that is displayed behind the company profile components */}
          <img className='profile-bg-image' src={ImageBG} alt="Image by Kelly Cusimano on-location" />
          {/* Social Media links => functionality handled within this component*/}
          <div className="profile-socialMedia-container">
            <h1 className="profile-socialMedia-ZSPlogo-ZS"
             style={{
                color: this.state.colorLogoZS,
                transition: this.state.durationLogoChanges,
             }}>ZAC SEEWALD</h1>
            <h1 className="profile-socialMedia-ZSPlogo-P"
            style={{
              color: this.state.colorLogoPhotog,
              transition: this.state.durationLogoChanges,
            }}>PHOTOGRAPHER</h1>
            <div className="profile-socialMedia-box"
                style={{
                  background: this.state.colorSocialMedBG,
                  transition: this.state.durationLogoChanges,
                  }}>
              <a className="profile-instagram-link" 
                  href={this.state.instagramLink} >
                    <img className="profile-instagram-logo" src={InstagramImg} alt="View my Instagram page here" />
                  </a>
              <a className="profile-linkedin-link" 
                  href={this.state.linkedInLink} >
                    <img className="profile-linkedin-logo" src={LinkedInImg} alt="View my LinkedIn page here" />
                  </a>
              <a className="profile-twitter-link" 
                  href={this.state.twitterLink} >
                    <img className="profile-twitter-logo" src={TwitterImg} alt="View my Twitter page here" />
                  </a>

                <a className="profile-email-link" 
                  href={this.state.emailLink} >
                    <img className="profile-email-logo" src={EmailImg} alt="View my Twitter page here" />
                  </a>
                </div>
             
          </div>
      </div>
    )
  }
}

export default Profile;
