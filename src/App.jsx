import React, { useState } from 'react'
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { Aside } from './Aside/Aside';
import './App.css'

function App() {


  return (
    <div className="wrapper">
      < Header />
      <div className="main-container">
        < Main />
        < Aside />
      </div>
      < Footer />
    </div>
  )

}

export default App
