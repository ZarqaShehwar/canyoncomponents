
import React from 'react';
// import  { useState } from 'react';
import './App.css';
import { UserContext } from '../src/UserContext'
import { Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import RequestQuote from './components/REquestQutoe/RequestQuote';

import { useState } from 'react'

function App() {

  const [sideMenuBar, setsideMenuBar] = useState(false)
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false)
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] = useState(false)

  return (
    <UserContext.Provider value={{sideMenuBar, setsideMenuBar, sideMenuBarDropDown, setsideMenuBarDropDown, sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex}} >
     <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/request-quote' element={<RequestQuote/>}/>
     </Routes>
    </UserContext.Provider>
  )
}

export default App

