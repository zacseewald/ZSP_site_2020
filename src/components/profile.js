import React, { Component } from 'react';
// import NavProfile from './profile/navProfile';
import About from './profile/about';
import Clients from './profile/clientList';
import Services from './profile/services';




export class Profile extends Component {

  state = {
    isClickedAbout: true,
    isClickedClient: true,
    isClickedServices: true,
    colorAbout: "#f5f5f5",
    colorClients: '#91f1f9',
    colorServices: '#91f1f9',
    duration: "all 750ms cubic-bezier(0.510, -0.260, 0.400, 1.275)",
    linkName: "about",
    positionAbout: 0,
    positionClients: 0,
  }
  
  handleProfileLinkAbout = (e) => {
    e.preventDefault();

    this.setState({
      isClickedAbout: true,
      isClickedClient: true,
      colorAbout: "#f5f5f5",
      colorClients: '#91f1f9',
      colorServices: '#91f1f9',
      linkName: "about",
      positionAbout: 0,
      positionClients: 0,
    });
}

handleProfileLinkClients = (e) => {
  e.preventDefault();
  
  this.setState({
    isClickedAbout: false,
    isClickedClient: true,
    colorAbout: '#6b3536',
    colorClients:"#f5f5f5",
    colorServices: '#6b3536',
    linkName: "clients",
    positionAbout: '-90vw',
    positionClients: 0,
  });
}

handleProfileLinkServices = (e) => {
  e.preventDefault();
  
  this.setState({
    isClickedAbout: false,
    isClickedClient: false,
    isClickedServices: true,
    colorAbout: '#36373a',
    colorClients:"#36373a",
    colorServices: "#f5f5f5",
    linkName: "services",
    positionAbout: '-90vw',
    positionClients: '-90vw',
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
              duration={this.state.duration} />
          <Clients 
              clickStatus={this.state.isClickedClient} 
              link={this.state.linkName}
              position={this.state.positionClients}
              duration={this.state.duration}  />
          <Services clickStatus={this.state.isClickedServices} link={this.state.linkName} />
      </div>
    )
  }
}

export default Profile;
