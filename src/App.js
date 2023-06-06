
import React from 'react';
// import  { useState } from 'react';
import './App.css';
import { UserContext } from '../src/UserContext'
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RequestQuote from './components/REquestQutoe/RequestQuote';import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const [sideMenuBar, setsideMenuBar] = useState(false)
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false)
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] = useState(false)

  return (
    <UserContext.Provider value={{sideMenuBar, setsideMenuBar, sideMenuBarDropDown, setsideMenuBarDropDown, sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex}} >
      <div className="App">
      <Header/>
      <Footer/>
    </div>
    </UserContext.Provider>
  )
}

export default App

