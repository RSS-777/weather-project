import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { About } from './pages/About/About';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Footer } from './components/Footer/Footer';
import { WeatherProvider } from './context/WeatherContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <WeatherProvider>
          <div className='wrapper'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </div>
        </WeatherProvider>
    </Provider>
  )
};

export default App
