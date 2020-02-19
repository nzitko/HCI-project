import React from "react"
import "./layout.css"
import Img from "gatsby-image"

const PlayerCard = ({ key, image, metadata }) => {
    return (
        <div className="player-card">
            <Img key={key} fluid={image} alt="arsenal" className="player-image" />
            <div className="player-info">{metadata[0]["nationality"]}</div>
            <div className="player-info">{metadata[0]["club"]}</div>
            <div className="player-info">{metadata[0]["name"]}</div>
        </div>
    );
}

export default PlayerCard

