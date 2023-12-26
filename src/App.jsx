import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { About } from './Pages/About/About';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
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
              <Route index element={<Home />} />
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
