import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { About } from './Pages/About/About';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
import { Footer } from './components/Footer/Footer';
import { WeatherProvider } from './context/WeatherContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Router basename='/React_Home_Work'>
          <div className='wrapper-app'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </WeatherProvider>
    </ThemeProvider>
  )
};

export default App
