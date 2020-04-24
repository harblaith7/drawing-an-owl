
import Webcam from "react-webcam";

import React, { Component } from 'react';

class WebCam extends Component {

  constructor(props){
    super(props)
    this.state = {
      imageSrc : ""
    }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      imageSrc : imageSrc
    })
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        <img src={this.state.imageSrc} alt=""/>
      </div>
    );
  }
}

export default WebCam;