import React, { Component } from 'react';
import ImgInfo from './utilities/image.json';


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

        }
    
    handleInfoBtnClick = (e) => {
        e.preventDefault();
        !this.state.isClicked 
        ? 
        this.setState({
            opacity: "1",
            isClicked: true,
        })
        :
        this.setState({
            opacity: "0",
            isClicked: false,
        });
    }
  
    render() {
     
        return (

            <div className="info-button-parent-box" >
                <a className="into-button-child-border" onClick={this.handleInfoBtnClick} >
                    <div className="info-button-text" >i</div>
                </a>

                <div className="info-container" 
                    style={{
                        color: this.state.color,
                        opacity: this.state.opacity,
                        bottom: this.state.bottom,
                    }}>

                    <h2 className="image-title-main" 
                        style={{
                                color: this.state.color,
                                opacity: this.state.opacity,
                            }}>IMAGE INFO</h2>

                    <div className="image-archtect"
                        style={{
                                color: this.state.color,
                                opacity: this.state.opacity,
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
                            opacity: this.state.opacity,
                        }}>
                            <h3 className="title-location" >LOCATION: </h3>
                            <h3 className="name-location" >{this.state.imgLocation}</h3>
                        </div>

                    <div className="image-story"
                        style={{
                            color: this.state.color,
                            opacity: this.state.opacity,
                        }}>

                            <h3 className="image-title-story">STORY:</h3>
                            <p className="image-story">{this.state.imgStory}</p>
                        </div>
                        

                </div>
            </div>
        )
    }
}

export default infoButton
