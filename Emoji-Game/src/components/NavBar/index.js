// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props
  const getScores = () => {
    if (gameStatus === 'running') {
      return (
        <ul className="nav-items-container">
          <li className="nav-item">
            <p className="nav-item-text">Score: {score}</p>
          </li>
          <li className="nav-item">
            <p className="nav-item-text">Top Score: {topScore}</p>
          </li>
        </ul>
      )
    }
    return <></>
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="nav-logo-image"
          />
          <h1 className="nav-logo-name">Emoji Game</h1>
        </div>
        {getScores()}
      </div>
    </nav>
  )
}

export default NavBar
