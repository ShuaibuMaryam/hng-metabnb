import React from 'react'
import Hero from '../Components/Home/Hero'
import Inspo from '../Components/Home/Inspo'
import Label from '../Components/Home/Label'
import Navbar from '../Components/Home/Navbar'

function Home() {
  return (
    <div>
        <Navbar />

        <Hero />

        <Label />

        <Inspo />
    </div>
  )
}

export default Home