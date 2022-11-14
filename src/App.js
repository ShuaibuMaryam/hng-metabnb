import React, {useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import './Styles/navbar.css'
import Places from './Pages/Places';
import WalletModal from './Pages/WalletModal';

function App() {

  const [openWalletModal, setOpenWAlletModal] = useState(false)

  const handleOpenWalletModal = () =>{
    console.log('clicked')
    setOpenWAlletModal(true)
  }

  const handleCloseWalletModal = () => {
    setOpenWAlletModal(false)
  }

  return (
    <div className="App">

        <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home openWalletModal = {handleOpenWalletModal}/>}/>
          <Route path='/places' element={<Places openWalletModal = {handleOpenWalletModal}/>}/>
          {/* <Route path='/walletModal' element={<WalletModal />}/> */}

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
