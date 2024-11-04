// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFnameVisible: false, isLnameVisible: false}

  onShowHideFname = () => {
    this.setState(prevState => ({isFnameVisible: !prevState.isFnameVisible}))
  }

  onShowHideLname = () => {
    this.setState(prevState => ({isLnameVisible: !prevState.isLnameVisible}))
  }

  renderFname = () => {
    const {isFnameVisible} = this.state
    if (isFnameVisible === true) {
      return (
        <div className="name-container">
          <p className="name">Joe</p>
        </div>
      )
    }
    return null
  }

  renderLname = () => {
    const {isLnameVisible} = this.state
    if (isLnameVisible === true) {
      return (
        <div className="name-container">
          <p className="name">Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="cards-container">
            <div className="card">
              <button
                className="button"
                type="button"
                onClick={this.onShowHideFname}
              >
                Show/Hide Firstname
              </button>
              {this.renderFname()}
            </div>
            <div className="card">
              <button
                className="button"
                type="button"
                onClick={this.onShowHideLname}
              >
                Show/Hide Lastname
              </button>
              {this.renderLname()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
