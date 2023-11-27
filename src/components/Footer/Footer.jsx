import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <nav>
          <ul className='footer-list'>
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