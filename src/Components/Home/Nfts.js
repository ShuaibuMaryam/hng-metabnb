import React from 'react'
import nftImage from '../../Assets/home/nft-img.png'
import '../../Styles/nfts.css'

function Nfts() {
  return (
    <div className='nfts'>
        <div className='nft-text'>
            <h3>Metabnb NFTs</h3>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which
                are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
            </p>
            <a href='#'>Learn more</a>
        </div>
        <div className='nft-image'>
            <img src={nftImage}/>
        </div>
    </div>
  )
}

export default Nfts