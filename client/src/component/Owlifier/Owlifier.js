import React, { Component } from 'react'
import "./Owlifier.scss"

export default class Owlifier extends Component {
    render() {
        return (
            <div className="Owlifier">
                <div className="Owlifier__container">
                    <h2 className="Owlifier__heading">
                        Introducing Owlifier
                    </h2>
                    <p className="Owlifier__description">
                        With our development and machine learning skills we created what is most probably the greatest piece of technology to ever come 
                        out of our bedrooms. Yes, we created a way to turn our faces into owls.
                    </p>
                    <p className="Owlifier__description">
                        We are very proud and exicited to present, Owlifier, the only human to owl converter currently on the market.
                        With Owlifier, we where able to finally gain the perspective of a real owl, and now we want to share that experience
                        with you. You can use Owlifier below if you think it will be an asset for your Shopify application.
                    </p>
                </div>
            </div>
        )
    }
}
