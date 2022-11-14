import React from 'react'
import card1Image from '../../Assets/home/card-1-img.png'
import card2Image from '../../Assets/home/card-2-img.png'
import card3Image from '../../Assets/home/card-3-img.png'
import card4Image from '../../Assets/home/card-4-img.png'
import card5Image from '../../Assets/home/card-5-img.png'
import card6Image from '../../Assets/home/card-6-img.png'
import card7Image from '../../Assets/home/card-7-img.png'
import card8Image from '../../Assets/home/card-8-img.png'
import card9Image from '../../Assets/places/card-9-img.png'
import card10Image from '../../Assets/places/card-10-img.png'
import card11Image from '../../Assets/places/card-11-img.png'
import card12Image from '../../Assets/places/card-12-img.png'
import card13Image from '../../Assets/places/card-13-img.png'
import card14Image from '../../Assets/places/card-14-img.png'
import card15Image from '../../Assets/places/card-15-img.png'
import card16Image from '../../Assets/places/card-16-img.png'
import starRatings from '../../Assets/home/star-ratings.png'
import PlacesCard from './PlacesCard'



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
    },

    {
        id: 9,
        image: card9Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 10,
        image: card10Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 11,
        image: card11Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 12,
        image: card12Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 13,
        image: card13Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 14,
        image: card14Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 15,
        image: card15Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    },

    {
        id: 16,
        image: card16Image,
        title: "Desert king",
        price: "1MBT per night",
        distance: "2345km away",
        availability: "available for 2weeks stay",
        rating: starRatings
    }
]


function PlacesCards() {

    const placesCards = cardData.map(card => 

        <PlacesCard 
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            distance={card.distance}
            availability={card.availability}
            rating={card.rating}
        />
    
    )

  return (
    <div className='inspo places-cards'>
        <div className='inspo-cards'>
            {placesCards}
        </div>
    </div>
  )
}

export default PlacesCards