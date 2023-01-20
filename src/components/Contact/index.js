import React from "react";
import './index.css'


function Contact () {
    return (
        <div className="contact-container">
            <h1 className="contact-name">CONTACT <span className="span">AWESOME</span></h1>
            <div className="footer-container">
                <div className="contact-details-container">
                    <label htmlFor="name" className="labelstyling">NAME</label>
                    <input type='text' id='name' className="styling"/>
                    <label htmlFor="email" className="labelstyling">EMAIL</label>
                    <input type='email' id='email' className="styling" />
                    <label htmlFor="message" className="labelstyling">MESSAGE</label>
                    <input type='text' id="message" className="styling" />
                    <button className="btn">Submit</button>
                </div>
                <div className="address">
                    <h1 className="name-of-address">OUR ADDRESS</h1>
                    <p className="paraaa">Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et <br /> laoreet phasellus ut nisi id leo molesite.</p>
                    <div className="phone-details">
                        <p className="number">010-020-0340</p>
                    </div>
                    <div className="email-address">
                        <p className="company-email">awesome@company.com</p>
                    </div>
                    <div className="location">
                        <p className="location-pincode"> 663 New Walk Roadside, Birdeye View, GO 11020</p>
                    </div>
                    <hr />
                    <div className="footer">
                        <p className="last-line">WE ARE SOCIAL</p>
                    </div>
                </div>
            </div>
            <div className="copyrighgt">
                <p className="copy">Copyright 2084 Company Name</p>
            </div>
        </div>
    )
}

export default Contact