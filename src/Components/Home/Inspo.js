import React from 'react'
import InspoCard from './InspoCard'
import card1Image from '../../Assets/home/card-1-img.png'
import card2Image from '../../Assets/home/card-2-img.png'
import card3Image from '../../Assets/home/card-3-img.png'
import card4Image from '../../Assets/home/card-4-img.png'
import card5Image from '../../Assets/home/card-5-img.png'
import card6Image from '../../Assets/home/card-6-img.png'
import card7Image from '../../Assets/home/card-7-img.png'
import card8Image from '../../Assets/home/card-8-img.png'
import starRatings from '../../Assets/home/star-ratings.png'
import '../../Styles/inspo.css'



const cardData = [
    {
        id: 1,
        image: card1Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 2,
        image: card2Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 3,
        image: card3Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 4,
        image: card4Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 5,
        image: card5Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 6,
        image: card6Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 7,
        image: card7Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 8,
        image: card8Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    }
]


const inspoCards = cardData.map(card => 

    <InspoCard 
        key={card.id}
        image={card.image}
        title={card.title}
        price={card.price}
        distance={card.distance}
        availability={card.availability}
        rating={card.rating}
    />

)

function Inspo() {
  return (
    <div className='inspo'>
        <div className='inspo-heading'>
            <h4>Inspiration for your next adventure</h4>
        </div>

        <div className='inspo-cards'>
            {inspoCards}
        </div>
        

    </div>
  )
}

export default Inspo

