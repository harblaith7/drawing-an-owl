import React, { Component } from 'react';
import "./Header.scss"
import laithSide from "../../assets/laith-side.png"
import andrewSide from "../../assets/andrew-side.png"
import shopify from "../../assets/shopify_logo.png"

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__container">
                    <div className="Header__text-container">
                        <div className="Header__text-content-container">
                            <h1 className="Header__heading">Hey <img src={shopify} alt="" className="Header__logo"/></h1>
                            <h3 className="Header__sub-heading">
                                We're <span>Laith</span> & <span>Andrew</span> and we drew
                                that <span className="yellow">f**king</span> <span>owl</span>!
                            </h3>
                            <button className="Header__btn">
                                Check it out
                            </button>
                            <button className="Header__btn">
                                About Us
                            </button>
                        </div>
                    </div>
                    <div className="Header__img-container">
                        <img src={laithSide} alt="" className="Header__image"/>
                        <img src={andrewSide} alt="" className="Header__image Header__image--andrew-side"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;