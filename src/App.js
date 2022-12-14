import React, {useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Places from './Pages/Places';
import WalletModal from './Pages/WalletModal';
import './Styles/navbar.css'


function App() {

  const [openWalletModal, setOpenWalletModal] = useState(false)

  const handleOpenWalletModal = () =>{
    setOpenWalletModal(true)
  }

  const handleCloseWalletModal = () => {
    setOpenWalletModal(false)
  }

  return (
    <div className="App">

        {openWalletModal && <WalletModal openWalletModal = {handleCloseWalletModal}/>}

        <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home openWalletModal = {handleOpenWalletModal}/>}/>
          <Route path='/places' element={<Places openWalletModal = {handleOpenWalletModal}/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
