import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <ul className="nav-menu">
      <li className="nav-menu-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
