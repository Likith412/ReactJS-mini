import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="navbar-nav">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
          className="nav-logo"
          alt="website logo"
        />
      </Link>
      <Popup
        trigger={
          <button
            type="button"
            className="nav-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="nav-button-icon" />
          </button>
        }
        modal
        className="popup-content"
      >
        {close => (
          <div className="container">
            <ul className="popup-links-container">
              <li className="list-item">
                <Link to="/" className="popup-link">
                  <AiFillHome className="popup-link-icon" />
                  <p className="popup-link-text">Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className="popup-link">
                  <BsInfoCircleFill className="popup-link-icon" />
                  <p className="popup-link-text">About</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="popup-close-button"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose className="popup-close-button-icon" />
            </button>
          </div>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
