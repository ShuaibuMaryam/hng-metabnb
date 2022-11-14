import React from 'react'
import footerLogo from '../../Assets/home/footer-logo.png'
import facebookIcon from '../../Assets/home/facebook-icon.png'
import instagramIcon from '../../Assets/home/instagram-icon.png'
import twitterIcon from '../../Assets/home/twitter-icon.png'
import '../../Styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-section footer-logo-section'>
          <div>
            <img src={footerLogo}/>
          </div>

          <div className='footer-socials'>
            <img src={facebookIcon}/>
            <img src={instagramIcon}/>
            <img src={twitterIcon}/>
          </div>

          <div className='footer-copyright'>
            <h5>&copy; 2022 Metabnb</h5>
          </div>
        </div>

        <div className='footer-section'>
          <h4>Community</h4>
          <ul className='footer-links'>
            <li><a href=''>NFT</a></li>
            <li><a href=''>Tokens</a></li>
            <li><a href=''>Landlords</a></li>
            <li><a href=''>Discord</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Places</h4>
          <ul className='footer-links'>
            <li><a href=''>Castle</a></li>
            <li><a href=''>Farms</a></li>
            <li><a href=''>Beach</a></li>
            <li><a href=''>Learn more</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>About us</h4>
          <ul className='footer-links'>
            <li><a href=''>Road map</a></li>
            <li><a href=''>Creators</a></li>
            <li><a href=''>Career</a></li>
            <li><a href=''>Contact us</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer