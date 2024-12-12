// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTimerRunning: false,
      timerLimit: 25,
      timeElapsedInSeconds: 0,
    }
  }

  onToggleTimerStatus = () => {
    const {isTimerRunning} = this.state

    if (isTimerRunning === false) {
      this.timerIntervalId = setInterval(() => {
        this.setState(prevState => {
          if (prevState.timeElapsedInSeconds === prevState.timerLimit * 60) {
            clearInterval(this.timerIntervalId)
            return {
              isTimerRunning: false,
              timeElapsedInSeconds: 0,
            }
          }
          return {timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1}
        })
      }, 1000)
    } else {
      clearInterval(this.timerIntervalId)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onIncreaseTimeLimit = () => {
    const {timeElapsedInSeconds} = this.state
    if (timeElapsedInSeconds === 0) {
      this.setState(prevState => ({
        timerLimit: prevState.timerLimit + 1,
      }))
    }
  }

  onDecreaseTimeLimit = () => {
    const {timerLimit, timeElapsedInSeconds} = this.state
    if (timerLimit > 0 && timeElapsedInSeconds === 0) {
      this.setState(prevState => ({
        timerLimit: prevState.timerLimit - 1,
      }))
    }
  }

  onResetTimer = () => {
    clearInterval(this.timerIntervalId)
    this.setState({
      timerLimit: 25,
      timeElapsedInSeconds: 0,
      isTimerRunning: false,
    })
  }

  render() {
    const {timerLimit, isTimerRunning, timeElapsedInSeconds} = this.state
    const remainingTime = timerLimit * 60 - timeElapsedInSeconds
    const hours = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    const getTime = number => {
      if (number < 10) {
        return `0${number}`
      }
      return `${number}`
    }

    const iconUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Digital Timer</h1>
          <div className="digital-timer-bg-container">
            <div className="timer-container">
              <div className="timer">
                <h1 className="timer-text">
                  {getTime(hours)}:{getTime(seconds)}
                </h1>
                <p className="timer-status">
                  {isTimerRunning ? 'Running' : 'Paused'}
                </p>
              </div>
            </div>
            <div>
              <div className="timer-control-container">
                <button
                  className="timer-control-btn"
                  type="button"
                  onClick={this.onToggleTimerStatus}
                >
                  <img
                    src={iconUrl}
                    alt={isTimerRunning ? 'pause icon' : 'play icon'}
                    className="timer-control-btn-icon"
                  />
                  <p className="timer-control-btn-text">
                    {isTimerRunning ? 'Pause' : 'Start'}
                  </p>
                </button>
                <button
                  className="timer-control-btn"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="timer-control-btn-icon"
                  />
                  <p className="timer-control-btn-text">Reset</p>
                </button>
              </div>
              <div className="timer-limit-container">
                <p className="timer-limit-heading">Set Timer limit</p>
                <div className="timer-limit-control">
                  <button
                    className="timer-limit-control-btn"
                    type="button"
                    onClick={this.onDecreaseTimeLimit}
                  >
                    -
                  </button>
                  <p className="timer-limit-text">{timerLimit}</p>
                  <button
                    className="timer-limit-control-btn"
                    type="button"
                    onClick={this.onIncreaseTimeLimit}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
