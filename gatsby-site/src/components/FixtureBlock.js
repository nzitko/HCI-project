import React from "react"
import "./layout.css"

const FixtureBlock = ({details, image1 , image2, name1, name2, score}) => {
    return (
    <div className="fixture-block">
        <div clasName="left-club">
            <p className="fixture-club-name">{name1}</p>
            <img src={image1} alt="everton" className="club-logo"/>
        </div>
        <div className="fixture-info">
            <p className = "fixture-details">{details}</p>
            <p className ="match-score">{score}</p>
        </div>
        <div className = "right-club">
            <p className="fixture-club-name">{name2}</p>
            <img src={image2} alt="westham" className="club-logo"/>
        </div>
    </div>
    );
}

export default FixtureBlock