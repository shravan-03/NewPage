import React from "react";
import img1 from '../../images/portfolio-img1.jpg'
import img2 from '../../images/portfolio-img2.jpg'
import img3 from '../../images/portfolio-img3.jpg'
import img4 from '../../images/portfolio-img4.jpg'
import './index.css'

function Portfolio () {
    return (
     <div className="portfolio-container">
        <h1 className="portfolio-heading"><span className="span">AWESOME </span> PORTFOLIO </h1>
        <div className="portfolio-imaages-container">
            <img src={img1} className='images' alt='img' />
            <img src={img2} className='images' alt='img' />
            <img src={img3} className='images' alt='img' />
            <img src={img4} className='images' alt='img' />
        </div>
        <div className="portfolio-imaages-container">
            <img src={img3} className='images' alt='img' />
            <img src={img4} className='images' alt='img' />
            <img src={img1} className='images' alt='img' />
            <img src={img2} className='images' alt='img' />
        </div>
     </div>
    )
}

export default Portfolio