import React, { Component } from 'react';
import "./LandingPage.scss"
import Header from "../../component/Header/Header"
import Intro from "../../component/Intro/Intro"
import Owlifier from "../../component/Owlifier/Owlifier"
import WebCam from "../../component/WebCam/WebCam"

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Header/>
                <Intro/>
                <Owlifier/>
                <WebCam/>
            </div>
        );
    }
}

export default LandingPage;