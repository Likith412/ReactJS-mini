// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark'}

  onModeChange = () => {
    this.setState(prevState => {
      if (prevState.mode === 'dark') {
        return {mode: 'light'}
      }
      return {mode: 'dark'}
    })
  }

  getButtonName = mode => {
    if (mode === 'dark') {
      return 'Light Mode'
    }
    return 'Dark Mode'
  }

  render() {
    const {mode} = this.state
    const cardClassName = `card ${mode}`
    return (
      <div className="bg-container">
        <div className={cardClassName}>
          <h1 className="card-heading">click To Change Mode</h1>
          <button
            type="button"
            className="card-btn"
            onClick={this.onModeChange}
          >
            {this.getButtonName(mode)}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
