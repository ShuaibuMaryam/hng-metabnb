import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import './Styles/navbar.css'
import Places from './Pages/Places';

function App() {
  return (
    <div className="App">

        <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/places' element={<Places />}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
