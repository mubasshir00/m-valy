import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <div className="cardContainer">
            <div className="cardWrapper">
                {props.children}
            </div>
        </div>
    )
}

export default Card
