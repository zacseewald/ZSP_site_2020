import React, { Component } from 'react'



export class infoButton extends Component {

    state = {
        opacity: 0,
        isClicked: false,
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
                <button className="into-button-child-border" onClick={this.handleInfoBtnClick} >
                    <a className="info-button-text" >i</a>
                </button>

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
                            }}>Image Info:</h2>

                    <div className="image-archtect"
                     style={{
                            color: this.state.color,
                            opacity: this.state.opacity,
                        }}>
                                <h3 className="title-architect" >ARCHITECT: </h3>
                                <h3 className="name-architect" >Cusimano Architects</h3>
                            </div>

                    <div className="image-location"
                      style={{
                            color: this.state.color,
                            opacity: this.state.opacity,
                        }}>
                                <h3 className="title-location" >LOCATION: </h3>
                                <h3 className="name-location" >Houston, TX</h3>
                        </div>

                    <h3 className="image-title-story"
                        style={{
                            color: this.state.color,
                            opacity: this.state.opacity,
                        }}>Story:</h3>

                    <p className="image-story"
                          style={{
                            color: this.state.color,
                            opacity: this.state.opacity,
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
            </div>
        )
    }
}

export default infoButton
