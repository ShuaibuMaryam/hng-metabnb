import React from 'react'
import settingIcon from '../../Assets/places/setting-icon.png'
import '../../Styles/navbarSecondary.css'

function NavbarSecondary() {
  return (
    <div>
        <div className='navbar-secondary'>
            <ul className='secondary-nav-links'>
                <li><a href='#'>Restaurant</a></li>
                <li><a href='#'>Cottage</a></li>
                <li><a href='#'>Castle</a></li>
                <li><a href='#'>Fantast city</a></li>
                <li><a href='#'>beach</a></li>
                <li><a href='#'>Cabins</a></li>
                <li><a href='#'>Off-grids</a></li>
                <li><a href='#'>Farm</a></li>
            </ul>

            <div className='location-setting'>
                <a href='#'>Location </a>
                <div><img src={settingIcon}/></div>
            </div>

        </div>
    </div>
  )
}

export default NavbarSecondary