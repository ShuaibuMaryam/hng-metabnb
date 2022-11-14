import React, {useState} from 'react'
import Footer from '../Components/Home/Footer'
import Hero from '../Components/Home/Hero'
import Inspo from '../Components/Home/Inspo'
import Label from '../Components/Home/Label'
import Navbar from '../Components/Home/Navbar'
import Nfts from '../Components/Home/Nfts'
import WalletModal from './WalletModal'

function Home() {

  const [openWalletModal, setOpenWAlletModal] = useState(false)

  const handleOpenWalletModal = () =>{
    console.log('clicked')
    setOpenWAlletModal(true)
  }

  const handleCloseWalletModal = () => {
    setOpenWAlletModal(false)
  }
  return (
    <div>
        {openWalletModal && <WalletModal openWalletModal = {handleOpenWalletModal}/>}

        <Navbar openWalletModal = {handleCloseWalletModal}/>

        <Hero />

        <Label />

        <Inspo />

        <Nfts />

        <Footer />
    </div>
  )
}

export default Home