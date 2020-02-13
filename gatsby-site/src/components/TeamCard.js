import React from "react"
import "./layout.css"

const TeamCard = ({image, name}) => {
    return (
    <div className="team-card">
        <img src={image} alt="arsenal" className="club-image"/>
        <p className="club-name">{name}</p>
    </div>
    );
}

export default TeamCard