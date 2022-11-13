import React from 'react'
import heroImage from '../../Assets/home/hero-img.png'
import '../../Styles/hero.css'

function Hero() {
  return (
    <div className='hero'>
       <div className='hero-text'>
            <h1 className='hero-text-heading'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
            <p className='hero-text-desc'>we provide you access to luxury and affordable houses in the metaverse, 
                get a chance to turn your imagination to reality at your comfort zone
            </p>
            <div className='hero-text-search'>
                <input type="text" placeholder='Search for location' className='input-text'/>
                <input type="submit" value="search" className='input-search'/>
            </div>
       </div>
       <div className='hero-images'>
            <img src={heroImage}/>
        </div> 
    </div>
  )
}

export default Hero