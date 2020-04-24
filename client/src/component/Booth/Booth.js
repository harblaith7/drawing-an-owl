import React, { Component } from 'react';
import "./Booth.scss"

class Booth extends Component {

    constructor(props){
        super(props)
        this.state = {
            src : ""
        }   
    }


    componentDidMount = () => {
        this.videoRunner()
    }

    videoRunner = () => {

        let video = document.getElementById("video")
        let vendorUrl = window.URL || window.webkitURL

        navigator.getMedia = navigator.getUserMedia || 
                            navigator.webkitGetUserMedia || 
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia

        navigator.getMedia({
            video: true,
            audio: false,
        }, (stream) => {
            video.srcObject = stream
            video.play()
        }, (error) => {

        })
    }

    render() {
        return (
            <div className="Booth">
                <video 
                    src="" 
                    id="video"
                    className="Booth__video"
                    width="400"
                    height="400"
                >

                </video>
            </div>
        );
    }
}

export default Booth;