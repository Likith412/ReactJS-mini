// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomVal = Math.round(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomVal}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="sub-heading">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button
            type="button"
            className="increment-btn"
            onClick={this.onIncrement}
          >
            increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
