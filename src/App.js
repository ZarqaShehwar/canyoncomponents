
import React from 'react';
// import  { useState } from 'react';
import './App.css';
import { UserContext } from '../src/UserContext'
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RequestQuote from './components/REquestQutoe/RequestQuote';
function App() {
  return (
   <>
        <UserContext.Provider value={{  }}>
          

            <Routes>
              <Route path='/' element={<Layout  />} />
              <Route path='/request-quote' element={<RequestQuote />} />

            </Routes>
       

        </UserContext.Provider>
   </>
  );
}

export default App;
