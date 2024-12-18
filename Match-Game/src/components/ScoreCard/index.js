import './index.css'

const ScoreCard = props => {
  const {score, onClickReset} = props

  return (
    <div className="scorecard-container">
      <div className="card-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            className="trophy-img"
            alt="trophy"
          />
          <p className="scorecard-text">YOUR SCORE</p>
          <p className="scorecard-text score">{score}</p>
          <button
            className="play-again-btn"
            type="button"
            onClick={onClickReset}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              className="play-again-icon"
              alt="reset"
            />
            <p className="play-again-text">PLAY AGAIN</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
