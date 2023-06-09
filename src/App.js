
import React from 'react';
// import  { useState } from 'react';
import './App.css';
import { UserContext } from '../src/UserContext'
import { Routes, Route} from 'react-router-dom';
import Index from './components/Index.jsx';
import RequestQuote from './components/REquestQutoe/RequestQuote';

import { useState } from 'react'
import CartPopup from './components/CartPopup/CartPopup';

function App() {

  const [sideMenuBar, setsideMenuBar] = useState(false)
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false)
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] = useState(false)

  const [isCartopen, setisCartopen] = useState(false)
  return (
    <UserContext.Provider value={{sideMenuBar,isCartopen,setisCartopen, setsideMenuBar, sideMenuBarDropDown, setsideMenuBarDropDown, sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex}} >
     <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/request-quote' element={<RequestQuote/>}/>
      <Route path='/add-to-cart' element={<CartPopup/>}/>
     </Routes>
    </UserContext.Provider>
  )
}

export default App

