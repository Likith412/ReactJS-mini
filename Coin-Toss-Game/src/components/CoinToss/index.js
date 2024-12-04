// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
  }

  headsCount = 0

  tailsCount = 0

  imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.headsCount += 1
      this.imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      this.tailsCount += 1
      this.imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div className="coin-toss-container">
            <img
              src={this.imageUrl}
              className="coin-toss-image"
              alt="toss result"
            />
            <br />
            <button
              className="coin-toss-btn"
              type="button"
              onClick={this.onTossCoin}
            >
              Toss Coin
            </button>
          </div>

          <div className="counts-container">
            <p className="count">Total: {count}</p>
            <p className="count">Heads: {this.headsCount}</p>
            <p className="count">Tails: {this.tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
