import React, { Component } from 'react'
import "./Display.css";


export class Display extends Component {
    render() {
        return (
            <div className="Display">
                {this.props.data}
            </div>
        )
    }
}

export default Display
