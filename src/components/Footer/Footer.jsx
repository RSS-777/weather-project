import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/themeContext';
import { date } from '../../utils/date';
import './Footer.css';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [stateSeason, setStateSeason] = useState('');

  useEffect(() => {
    setStateSeason(date.season)
  }, [])

  return (
    <footer>
      <div className={theme === 'white' ? `footer-content-${stateSeason}` : 'footer-content-dark'}>
        <nav>
          <ul className={theme === 'white' ? `footer-list-${date.season}` : 'footer-list-dark'}>
            <li><Link to="/">На головну</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
          </ul>
        </nav>
        <p className='author'>© 2023 RSS-777 "Погода" </p>
      </div>
    </footer>
  )
};