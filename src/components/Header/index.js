import React from "react";
import './index.css'

function Header () {
    return (
        <div className="header-container">
            <div className="header-details">
                <h1 className="phone">Phone <span className="highlight">010-020-0340</span></h1>
                <h1 className="email">Email <span className="highlight">awesome@company.com</span></h1>
                <h1 className="meet">Meet us on </h1>
            </div>
        </div>
    )
}

export default Header