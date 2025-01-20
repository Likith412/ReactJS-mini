import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="nav">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          className="nav-logo"
        />
      </Link>
    </div>
  </nav>
)

export default Header
