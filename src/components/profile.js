import React, { Component } from 'react';
import About from './profile/about';
import Clients from './profile/clientList';
import Services from './profile/services';
import ImageBG from './utilities/images/about.jpg';




export class Profile extends Component {

  state = {
    colorAbout: "#f5f5f5",
    spanAboutPosition: "40px",
    spanColor: '#91f1f9',

    colorClients: '#91f1f9',

    colorServices: '#91f1f9',
    duration: "all 750ms cubic-bezier(0.510, -0.260, 0.400, 1.275)",
    linkName: "about",
    positionAbout: 0,
    positionClients: 0,
    // leftBorderColor: '#91f1f9',
  }
  
  handleProfileLinkAbout = (e) => {
    e.preventDefault();

    this.setState({
      colorAbout: "#f5f5f5",
      spanAboutColor: '#91f1f9',
      spanAboutPosition: '40px',


      colorClients: '#91f1f9',
      spanClientsPosition: "40px",
      

      colorServices: '#91f1f9',
      spanServicesPosition: "40px",

      linkName: "about",
      positionAbout: 0,
      positionClients: 0,
      spanColor: '#91f1f9',
      
    });
}

handleProfileLinkClients = (e) => {
  e.preventDefault();
  
  this.setState({
    colorAbout: '#6b3536',
    colorClients:"#f5f5f5",
    colorServices: '#6b3536',
    linkName: "clients",
    positionAbout: '-90vw',
    positionClients: 0,
    spanColor: '#6b3536',
    spanAboutPosition: '-90vw',
  });
}

handleProfileLinkServices = (e) => {
  e.preventDefault();
  
  this.setState({
    colorAbout: '#777',
    colorClients:"#777",
    colorServices: "#f5f5f5",
    linkName: "services",
    positionAbout: '-90vw',
    positionClients: '-90vw',
    spanColor: '"#777',
    spanAboutPosition: '-90vw',
    spanServicesPosition: '-90vw',
  });
}
  render() {
   
    return (
      <div className="profile-box">
          <h1 className="about-title">
            <a 
              id="link"
              href="profile" 
              onClick={this.handleProfileLinkAbout}
              style={{
                color: this.state.colorAbout,
                transition: this.state.duration,
              }}>ABOUT</a>T</h1>
          <h1 className="client-title" >
            <a 
              id="link" 
              href="profile" 
              onClick={this.handleProfileLinkClients} 
              style={{
                color: this.state.colorClients,
                transition: this.state.duration,
              }}>CLIENTS</a></h1>
          <h1 className="services-title">
            <a 
              id="link" 
              onClick={this.handleProfileLinkServices} 
              href="profile" style={{
                color: this.state.colorServices,
                transition: this.state.duration,
              }}>SERVICES</a></h1>


          <About 
              clickStatus={this.state.isClickedAbout}
              link={this.state.linkName}
              position={this.state.positionAbout}
              duration={this.state.duration}
              spanAboutPosition={this.state.spanAboutPosition}
              spanColor={this.state.spanAboutPosition} />
              
       

          <Clients 
              clickStatus={this.state.isClickedClient} 
              link={this.state.linkName}
              position={this.state.positionClients}
              duration={this.state.duration}
              spanClientsPosition={this.state.spanClientsPosition}
              spanColor={this.state.spanColor} />
              
          <Services 
              clickStatus={this.state.isClickedServices} 
              link={this.state.linkName}
              spanServicesPosition={this.state.spanServicesPosition}
              spanColor={this.state.spanColor}  />
          <img className='profile-bg-image' src={ImageBG} alt="Image by Kelly Cusimano on-location" />
      </div>
    )
  }
}

export default Profile;
