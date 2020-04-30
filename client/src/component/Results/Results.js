import React, { Component } from 'react'
import "./Results.scss"
import results from "../../assets/owl-drawing.jpg"

export default class Results extends Component {

    constructor(props){
        super(props)
        this.state = {
            showPicture: false
        }
    }

    render() {
        return (
            <div className="Results">
                <div className="Results__container">
                    <h2 className="Results__heading">
                        Time to See our Owl
                    </h2>
                    <div className="Results__results-container">
                        <div className="Results__text-container">
                            <p className="Results__description">
                                Did Owlifier work in helping us draw the perfect owl? We'll let you be the judge of that. Click the button
                                below to reveal our drawing.
                            </p>
                            <a 
                                href="#our-drawing" 
                                className="Results__btn"
                                onClick={() => {
                                    this.setState({
                                        showPicture : true
                                    })
                                }}
                            >
                                    Show me the owl
                            </a>
                        </div>
                        <div className={`Results__drawing-container ${this.state.showPicture && "Results__drawing-container--visible"}`}>
                            <h2 className="Results__sub-heading" id="our-drawing">
                                It didn't work, this was a terrible f**king idea!
                            </h2>
                            <img src={results} alt="" className="Results__img" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
