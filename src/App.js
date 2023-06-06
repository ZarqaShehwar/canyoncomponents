import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header'
import {UserContext} from './UserContext'
import React, { useState } from 'react'

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

