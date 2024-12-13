// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  startTimer = () => {
    this.timerId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      timeElapsedInSeconds: 0,
    })
  }

  render() {
    const {timeElapsedInSeconds} = this.state
    const timeInMinutes = Math.floor(timeElapsedInSeconds / 60)
    const timeInSeconds = timeElapsedInSeconds % 60

    const stringifiedMinutes =
      timeInMinutes < 9 ? `0${timeInMinutes}` : {timeInMinutes}
    const stringifiedSeconds =
      timeInSeconds < 9 ? `0${timeInSeconds}` : {timeInSeconds}

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-card">
            <div className="logo-and-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-card-logo"
              />
              <p className="timer-card-heading">Timer</p>
            </div>
            <h1 className="timer-card-text">
              {stringifiedMinutes}:{stringifiedSeconds}
            </h1>
            <div className="btns-container">
              <button
                className="timer-card-btn start-btn"
                type="button"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                className="timer-card-btn stop-btn"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="timer-card-btn reset-btn"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
