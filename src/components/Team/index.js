import React from "react";
import Logo1 from '../../images/team-img1.jpg'
import Logo2 from '../../images/team-img2.jpg'
import Logo3 from '../../images/team-img3.jpg'
import Logo4 from '../../images/team-img4.jpg'

import './index.css'

function Team () {
    return (
        <div className="team-container">
        <h1 className="team-heading"><span className="span">AWESOME</span> TEAM</h1>
            <div className="card-container">
                <div className="card">
                    <img src={Logo1} alt="img" className="img" />
                    <h1 className="name">TRACY</h1>
                    <p className="designation">Designer</p>
                    <p className="description">Lorem ipsum dolor sit amet, <br />
                    consectetur adispiscing elitquisque <br />
                    tempus ac eget diam et laoreet <br/>
                    phasellus ut nisi id leo molest.</p>
                </div>
                <div className="card">
                    <img src={Logo2} alt="img" className="img" />
                    <h1 className="name">MARY</h1>
                    <p className="designation">Developer</p>
                    <p className="description">Lorem ipsum dolor sit amet, <br />
                    consectetur adispiscing elitquisque <br />
                    tempus ac eget diam et laoreet <br/>
                    phasellus ut nisi id leo molest.</p>
                </div>
                <div className="card">
                    <img src={Logo3} alt="img" className="img" />
                    <h1 className="name">JULIA</h1>
                    <p className="designation">Director</p>
                    <p className="description">Lorem ipsum dolor sit amet, <br />
                    consectetur adispiscing elitquisque <br />
                    tempus ac eget diam et laoreet <br/>
                    phasellus ut nisi id leo molest.</p>
                </div>
                <div className="card">
                    <img src={Logo4} alt="img" className="img" />
                    <h1 className="name">LINDA</h1>
                    <p className="designation">Manager</p>
                    <p className="description">Lorem ipsum dolor sit amet, <br />
                    consectetur adispiscing elitquisque <br />
                    tempus ac eget diam et laoreet <br/>
                    phasellus ut nisi id leo molest.</p>
                </div>
            </div>
        </div>
    )
}

export default Team