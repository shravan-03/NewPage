import React from "react";
import {Link} from 'react-router-dom'
import './index.css'

function Navbar () {
    return (
        <>
            
            <div className=" navbar-default templatemo-nav">
                <h1 className="nav-name">Awesome</h1>
                <div className="navbar navbar-container container">
                    <Link to='/' className='navbar'>
                        Home
                    </Link>
                    <Link to='/about' className='navbar'>
                        About
                    </Link>
                    <Link to='/team' className='navbar'>
                        Team
                    </Link>
                    <Link to='/service' className='navbar'>
                        Service
                    </Link>
                    <Link to='/portfolio' className='navbar'>
                        Portfolio
                    </Link>
                    <Link to='/contact' className='navbar'>
                        Contact
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar