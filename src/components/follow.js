
import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export class follow extends Component {
  
  state = {
    clickStatus: false,
    left: "-100px",
    transitionInst: ".3s",
    transitionLinked: ".7s",
    transitionTwitter: "1.3s",
    transitionContact: "1.7s",
}
followHandler = (e) => {
  e.preventDefault();
  if (!this.state.clickStatus) {
  this.setState({
    left: "30px",
    clickStatus: true,
  })} else {
    this.setState({
      left: "-100px",
      clickStatus: false,
    })
  }
}
  render() {
    return (
      <div className="follow-parent-box">
        <div className="follow-link-container">
          <a 
              className="follow-BTN" 
              onClick={this.followHandler}
              style={{color: this.props.color}}
              >FOLLOW</a>
            <a className="follow-link" id="instagram" href="#" 
              style={{
                left: this.state.left,
                transition: this.state.transitionInst,
                color: this.props.color,
              }}>instagram</a>
            <a className="follow-link" id="linkeIn" href="#"
              style={{
                left: this.state.left,
                transition: this.state.transitionLinked,
                color: this.props.color,
              }}>linkedin</a>
            <a className="follow-link" id="twitter" href="#"
              style={{
                left: this.state.left,
                transition: this.state.transitionTwitter,
                color: this.props.color,
              }}>twitter</a>
            <a className="follow-link" id="contact" href="#"
                style={{
                  left: this.state.left,
                  transition: this.state.transitionContact,
                  color: this.props.color,
                }}>contact</a>
          </div>
      </div>
    )
  }
}

export default follow
