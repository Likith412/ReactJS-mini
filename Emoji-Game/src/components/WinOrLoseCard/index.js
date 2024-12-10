// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {gameStatus, playAgain, score} = props
  let text
  let scoreHeading
  let imageUrl
  if (gameStatus === 'won') {
    text = 'You Won'
    scoreHeading = 'Best Score'
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    text = 'You Lose'
    scoreHeading = 'Score'
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <div className="card-container">
      <div className="win-or-lose-card">
        <div className="win-or-lose-card-img-container">
          <img
            src={imageUrl}
            alt="win or lose"
            className="win-or-lose-card-img"
          />
        </div>
        <div>
          <h1 className="win-or-lose-card-text">{text}</h1>
          <p className="win-or-lose-card-score-heading">{scoreHeading}</p>
          <p className="win-or-lose-card-score-text">{score}/12</p>
          <div className="play-again-btn-container">
            <button
              type="button"
              className="play-again-btn"
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
