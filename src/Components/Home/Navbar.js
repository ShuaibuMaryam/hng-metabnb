import React, { useState } from 'react'
import logo from '../../Assets/home/logo.png'

function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const toggleIsNavExpanded = () => {
        setIsNavExpanded(!isNavExpanded)
    }

  return (
    <div>
        <nav className='navigation'>
            <div className='navbar-brand'>
                <a href='/'><img src={logo}/></a>
            </div>
            
            <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                
                <ul className="nav-links">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/places'>Place to stay</a></li>
                    <li><a href='#'>NFTs</a></li>
                    <li><a href='#'>Community</a></li>
                </ul>

                <div className="nav-btn-wrapper">
                    <button className='nav-btn'>Connect wallet</button>
                </div>

            </div>


            <div className="hamburger" onClick={toggleIsNavExpanded}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar