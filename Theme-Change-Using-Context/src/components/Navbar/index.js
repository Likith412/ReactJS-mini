import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => {
  const darkWebsiteLogoImgUrl =
    'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
  const lightWebsiteLogoImgUrl =
    'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

  const darkThemeImgUrl =
    'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
  const lightThemeImgUrl =
    'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        return (
          <nav
            className={`navbar ${
              isDarkTheme ? 'nav-dark-theme-bg' : 'nav-light-theme-bg'
            }`}
          >
            <img
              className="nav-logo"
              src={isDarkTheme ? darkWebsiteLogoImgUrl : lightWebsiteLogoImgUrl}
              alt="website logo"
            />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
            <button
              className="nav-theme-toggler-btn"
              type="button"
              onClick={toggleTheme}
              data-testid="theme"
            >
              <img
                className="nav-theme-toggler-btn-img"
                src={isDarkTheme ? lightThemeImgUrl : darkThemeImgUrl}
                alt="theme"
              />
            </button>
          </nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar
