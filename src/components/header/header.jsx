import Logo from './../../assets/img/site-logo.svg'
import './header.scss'


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <a href="#" className="site-logo">
            <img src={Logo} alt="Site-logo" className="site-logo__img" />
          </a>

          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item"><a className='header__navbar-link' href="#">Bosh sahifa</a></li>
              <li className="header__navbar-item"><a className='header__navbar-link' href="#">Xizmatlar</a></li>
              <li className="header__navbar-item"><a className='header__navbar-link' href="#">Portfolio</a></li>
              <li className="header__navbar-item"><a className='header__navbar-link' href="#">Jamoa</a></li>
              <li className="header__navbar-item"><a className='header__navbar-link' href="#">Blog</a></li>
              <li className="header__navbar-item"><a className='header__navbar-link' href="#">Kontaktlar</a></li>
            </ul>
          </nav>

          <button className="header__btn">
            +998 90 921 37 11
          </button>


        </div>
      </div>
    </header>
  )
}

export default Header