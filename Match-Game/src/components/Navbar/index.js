import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    const {score, timeLeft} = this.props
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            className="navbar-logo"
            alt="website logo"
          />
          <ul className="nav-items-container">
            <li className="nav-item">
              <p className="nav-item-text">
                Score: <span className="bold-text">{score}</span>
              </p>
            </li>
            <li className="nav-item">
              <div className="time-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  className="time-icon"
                  alt="timer"
                />
                <p className="nav-item-text bold-text">{timeLeft} sec</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
