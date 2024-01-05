import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { date } from '../../utils/date';
import './Footer.css';

export const Footer = () => {
  const theme = useSelector((state) => state.theme.value);
  const [stateSeason, setStateSeason] = useState('');

  useEffect(() => {
    setStateSeason(date.season)
  }, [])

  return (
    <footer>
      <div className={theme === 'white' ? `footer-content-${stateSeason}` : 'footer-content-dark'}>
        <nav>
          <ul className={theme === 'white' ? `footer-list-${stateSeason}` : 'footer-list-dark'}>
            <li><NavLink to="/">На головну</NavLink></li>
            <li><NavLink to="/about">Про нас</NavLink></li>
            <li><NavLink to="/contact">Контакти</NavLink></li>
          </ul>
        </nav>
        <p className='author'>© 2023 RSS-777 "Погода"</p>
      </div>
    </footer>
  )
};