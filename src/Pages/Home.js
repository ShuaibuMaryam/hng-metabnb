import React from 'react'
import Hero from '../Components/Home/Hero'
import Inspo from '../Components/Home/Inspo'
import Label from '../Components/Home/Label'
import Navbar from '../Components/Home/Navbar'
import Nfts from '../Components/Home/Nfts'

function Home() {
  return (
    <div>
        <Navbar />

        <Hero />

        <Label />

        <Inspo />

        <Nfts />
    </div>
  )
}

export default Home