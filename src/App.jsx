import React from 'react'
import { Header } from './components/Header/Header';
import { WeatherBlock } from './components/WeatherBlock/WeatherBlock';
import { Footer } from './components/Footer/Footer';
import { Aside } from './components/Aside/Aside';
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
