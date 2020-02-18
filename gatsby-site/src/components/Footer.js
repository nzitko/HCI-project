import React from "react"
import "./layout.css"
import pllogo from "../images/logos/PL-Lion.png"
import ealogo from "../images/logos/easports.png"
import fifalogo from "../images/logos/fifa-logo.jpg"


const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer">
                <img className="footer-logo" src={pllogo} />
                <img className="footer-logo" src={ealogo} />
                <img className="footer-logo" src={fifalogo} />
            </div>
            <p className="copyright">(c) FESB 2020</p>
        </div>
    );
}

export default Footer