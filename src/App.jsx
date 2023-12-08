import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './Pages/Home/Home'
import { Contact } from './Pages/Contact/Contact';
import { About } from './Pages/About/About';
import { Footer } from './components/Footer/Footer';
import { WeatherProvider } from './context/weatherContext';
import { ThemeProvider } from './context/themeContext'

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Router>
          <div className='wrapper-app'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </WeatherProvider>
    </ThemeProvider>
  )
}

export default App
