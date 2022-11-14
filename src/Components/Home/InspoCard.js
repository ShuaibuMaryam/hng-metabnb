import React from 'react'
import '../../Styles/inspo.css'


function InspoCard ({image, title, price, distance, availability, rating}){
    return (
        <div className='inspo-card'>
            <div className='inspo-card-image'>
                <img src={image}/>
            </div>
            <div className='inspo-card-title'>
                <span>{title}</span>
                <span style={{fontWeight: 700}}>{price}</span>
            </div>
            <div className='inspo-card-desc'>
                <span>{distance}</span>
                <span>{availability}</span>
            </div>
            <div className='inspo-card-rating'>
                <img src={rating}/>
            </div>
        </div>
    )
}

export default InspoCard