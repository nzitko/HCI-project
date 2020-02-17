import React from "react"
import "./layout.css"
import Img from "gatsby-image"

const TeamCard = ({ key, image, name }) => {
    return (
        <div className="team-card">
            <Img key={key} fluid={image} alt="arsenal" className="club-image" />
            <p className="club-name">{name}</p>
        </div>
    );
}

export default TeamCard