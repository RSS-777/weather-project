import React, { useState, useEffect, useContext } from 'react'
import { Header } from './Header/Header';
import { WeatherBlock } from './WeatherBlock/WeatherBlock';
import { Footer } from './Footer/Footer';
import { Aside } from './Aside/Aside';
import './App.css'
import { WeatherProvider } from './context/weatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="wrapper">
        < Header />
        <div className="main-container">
          < WeatherBlock />
          < Aside />
        </div>
        < Footer />
      </div>
    </WeatherProvider>

  )

}

export default App
