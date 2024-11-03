// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="message">
            Bob ate <span className="count">{mangoesCount}</span> mangoes{' '}
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <br />
              <button
                type="button"
                className="fruit-eat-btn"
                onClick={this.eatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <br />
              <button
                type="button"
                className="fruit-eat-btn"
                onClick={this.eatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
