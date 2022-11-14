import React from 'react'
import Footer from '../Components/Home/Footer'
import Navbar from '../Components/Home/Navbar'
import NavbarSecondary from '../Components/Places/NavbarSecondary'
import PlacesCards from '../Components/Places/PlacesCards'

function Places() {
  return (
    <div>
        <Navbar />

        <NavbarSecondary />

        <PlacesCards />

        <Footer />
    </div>
  )
}

export default Places