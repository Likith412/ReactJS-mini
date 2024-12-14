import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPasswords from '../YourPasswords'
import './index.css'

class PasswordsManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
  }

  onWebsiteInputChange = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onUsernameInputChange = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onPasswordInputChange = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onAddPassword = event => {
    event.preventDefault()
    const {usernameInput, passwordInput, websiteInput} = this.state

    if (usernameInput !== '' && passwordInput !== '' && websiteInput !== '') {
      const colorClassNames = [
        'light-orange',
        'orange',
        'light-green',
        'green',
        'red',
      ]

      const randomIndex = Math.floor(Math.random() * 5)
      const newPassword = {
        id: uuidv4(),
        username: usernameInput,
        password: passwordInput,
        website: websiteInput,
        profileColor: colorClassNames[randomIndex],
      }

      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPassword],
        usernameInput: '',
        passwordInput: '',
        websiteInput: '',
      }))
    }
  }

  onDeletePassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {passwordsList} = this.state
    const {websiteInput, usernameInput, passwordInput} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="add-new-password-container">
            <div className="add-new-password-sm-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
                className="add-new-password-sm-img"
                alt="password manager"
              />
            </div>
            <div className="add-new-password-card">
              <h1 className="card-heading">Add New Password</h1>
              <form onSubmit={this.onAddPassword}>
                <div className="input-container">
                  <div className="input-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      className="input-logo"
                      alt="website"
                    />
                  </div>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Website"
                    onChange={this.onWebsiteInputChange}
                    value={websiteInput}
                  />
                </div>
                <div className="input-container">
                  <div className="input-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      className="input-logo"
                      alt="username"
                    />
                  </div>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Username"
                    onChange={this.onUsernameInputChange}
                    value={usernameInput}
                  />
                </div>
                <div className="input-container">
                  <div className="input-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      className="input-logo"
                      alt="password"
                    />
                  </div>
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter Password"
                    onChange={this.onPasswordInputChange}
                    value={passwordInput}
                  />
                </div>
                <div className="add-btn-container">
                  <button className="add-btn" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="add-new-password-lg-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
                className="add-new-password-lg-img"
                alt="password manager"
              />
            </div>
          </div>
          <YourPasswords
            passwordsList={passwordsList}
            onDeletePassword={this.onDeletePassword}
          />
        </div>
      </div>
    )
  }
}

export default PasswordsManager
