// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="click-container">
          <h1 className="click-message">
            The Button has been clicked <br />
            <span className="click-count">{count}</span> times
          </h1>
          <p className="click-text">Click the button to increase the count!</p>
          <button
            className="click-btn"
            type="button"
            onClick={this.increaseCount}
          >
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
