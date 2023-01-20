import React from "react";
import './index.css'

function About () {
    return (
        <div className="about-container">
            <h1 className="about-heading">WE ARE <span className="span">AWESOME</span></h1>
            <div className="wrap">
                <div className="list">
                    <i class="fa-light fa-mobile"></i>
                    <h1 className="side-heading">FULLY RESPONSIVE</h1>
                    <p className="para">Awesome responsive template is provided 
                    by <br /> <span className="span">templatemo</span> website. This is 
                    Bootstrap v3.3.2 layout built <br />
                    on HTML5 CSS3. You can use this <br />
                    for any purpose. Please tell your<br />
                    friends about it.</p>
                    
                </div>
                <div className="list">
                    <i class="fa-light fa-message"></i>
                    <h1 className="side-heading">FREE SUPPORT</h1>
                    <p className="para">Awesome responsive template is provided 
                    by <br /> <span className="span">templatemo</span> website. This is 
                    Bootstrap v3.3.2 layout built <br />
                    on HTML5 CSS3. You can use this <br />
                    for any purpose. Please tell your<br />
                    friends about it.</p>
                </div>
                <div className="list">
                    <i class="fa-brands fa-html5"></i>
                    <h1 className="side-heading">HTML5 & CSS3 </h1>
                    <p className="para">Awesome responsive template is provided 
                    by <br /> <span className="span">templatemo</span> website. This is 
                    Bootstrap v3.3.2 layout built <br />
                    on HTML5 CSS3. You can use this <br />
                    for any purpose. Please tell your<br />
                    friends about it.</p>
                </div>
            </div>
        </div>
    )
}

export default About