import React, { Component } from 'react'

export class infoButton extends Component {
    render() {
        return (
            <div className="info-button-parent-box" >
                <button className="into-button-child-border">
                    <a className="info-button-text" >i</a>
                </button>
            </div>
        )
    }
}

export default infoButton
