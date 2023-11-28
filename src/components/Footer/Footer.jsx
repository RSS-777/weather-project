import { useContext } from 'react';
import './Footer.css'
import {ThemeContext} from '../../context/themeContext'

export const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer>
      <div className={theme === 'white' ? 'footer-content' : 'footer-content-dark'}>
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