import React, { Component } from 'react'
import "./Intro.scss"

export default class Intro extends Component {
    render() {
        return (
            <div className="Intro">
                <div className="Intro__container">
                    <div className="Intro__text-container">
                        <p>
                            We know that at Shopify you're looking for passionate, driven, and team-oriented people to join your team,
                            but we also know of one hidden desire that is often overlooked. Yes having the necessary skills and experiences 
                            are great... but can you draw an owl?
                        </p>
                        <p>
                            For our Shopify application, we wanted to draw the perfect owl. We worked tirelessy to achieve this feat, but 
                            we were never satisfied with the end results. After many sleepless nights, we came to the conclusion that there is 
                            no better way to draw the perfect owl than to first become the owl.
                        </p>
                    </div>
                    <div className="Intro__text-container">
                       
                    </div>
                    <div className="Intro__video-container">
                        <iframe className="Intro__video" width="560" height="315" src="https://www.youtube.com/embed/xQ0OB5tGyB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
