import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
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

