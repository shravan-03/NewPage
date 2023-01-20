import React from "react";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services () {
    return (
        <div className="service-container">
            <h1 className="service-heading">OUR <span className="span">AWESOME</span> THINGS</h1>
            <div className="service-card-container">
                <div className="service-card">
                <FontAwesomeIcon icon="fa-solid fa-laptop" />
                    <h1 className="service-name">Web Design</h1>
                    <p className="service-description">Lorem ipsum dolor sit amet, <br />
                    consectetur adispiscing elitquisque tempus <br /> 
                    ac eget diam et laoreet phasellus <br />
                    ut nisi id leo molest.</p>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon icon="fa-regular fa-cloud" />
                    <h1 className="service-name">Cloud Computing</h1>
                    <p className="service-description">Lorem ipsum dolor sit amet, <br />
                    consectetur adispiscing elitquisque tempus <br /> 
                    ac eget diam et laoreet phasellus <br />
                    ut nisi id leo molest.</p>
                </div>
                <div className="service-card">
                    <FontAwesomeIcon icon="fa-light fa-gear" />
                    <h1 className="service-name">UX Design</h1>
                    <p className="service-description">Lorem ipsum dolor sit amet, <br/>
                    consectetur adispiscing elitquisque tempus <br /> 
                    ac eget diam et laoreet phasellus <br />
                    ut nisi id leo molest.</p>
                </div>
            </div>
        </div>
    )
}

export default Services