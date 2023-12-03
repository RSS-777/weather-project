import { useContext, useState, useEffect } from 'react';
import './Footer.css'
import {ThemeContext} from '../../context/themeContext'
import { date } from '../../utils/date';

export const Footer = () => {
  const {theme} = useContext(ThemeContext)
  const [stateSeason, setStateSeason] = useState('');

  useEffect(() => {
    setStateSeason(date.season)
}, [])

  return (
    <footer>
      <div className={theme === 'white' ? `footer-content-${stateSeason}` : 'footer-content-dark'}>
        <nav>
          <ul className={theme === 'white' ? 'footer-list' : 'footer-list-dark'}>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Контакти</a></li>
            <li><a href="#">Послуги</a></li>
            <li><a href="#" className="social-icon">Facebook</a></li>
          </ul>
        </nav>
        <p className='author'>© 2023 RSS-777   "Погода" </p>
      </div>
    </footer>
  )
}