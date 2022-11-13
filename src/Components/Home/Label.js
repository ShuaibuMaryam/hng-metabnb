import React from 'react'
import mbtokenImage from '../../Assets/home/mbtoken-img.png'
import metamaskImage from '../../Assets/home/metamask-img.png'
import openseaImage from '../../Assets/home/opensea-img.png'
import '../../Styles/label.css'
import '../../App.css'


function Label() {
  return (
    <div className='label'>
        <div>
            <img src={mbtokenImage} />
        </div>
        <div>
            <img src={metamaskImage} />
        </div>
        <div>
            <img src={openseaImage} />
        </div>
    </div>
  )
}

export default Label