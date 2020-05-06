
import Webcam from "react-webcam";
import "./WebCam.scss"
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
      <div className="WebCam">
        <div className="WebCam__container">
          <div className="WebCam__camera-container">
            <Webcam
              audio={false}
              height={550}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={550}
              videoConstraints={videoConstraints}
            />
          </div>
          <button className="WebCam__btn" onClick={this.capture}>Become the Owl</button>
          
          <img 
            src={`${this.state.imageSrc || "https://www.freywine.com/assets/client/Image/Blog/frey-blog-180612-great-horned-owl.jpg"} `}
             alt="" className="WebCam__img"
          />
        </div> 
      </div>
    );
  }
}

export default WebCam;