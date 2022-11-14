import React from 'react'
import Footer from '../Components/Home/Footer'
import Navbar from '../Components/Home/Navbar'
import NavbarSecondary from '../Components/Places/NavbarSecondary'
import PlacesCards from '../Components/Places/PlacesCards'
import '../Styles/navbar.css'

function Places({openWalletModal}) {
  return (
    <div className='places'>

        <Navbar opopenWalletModal = {openWalletModal}/>

        <NavbarSecondary />

        <PlacesCards />

        <Footer />
    </div>
  )
}

export default Places