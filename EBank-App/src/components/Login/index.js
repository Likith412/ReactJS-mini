import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    userIdInput: '',
    pinInput: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUserId = event => {
    this.setState({
      userIdInput: event.target.value,
    })
  }

  onChangePin = event => {
    this.setState({
      pinInput: event.target.value,
    })
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({
      userIdInput: '',
      pinInput: '',
      showErrorMsg: false,
      errorMsg: '',
    })
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  onLogin = async event => {
    event.preventDefault()
    const {userIdInput, pinInput} = this.state
    const credentials = {
      user_id: userIdInput,
      pin: pinInput,
    }

    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {userIdInput, pinInput, errorMsg, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-card-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-card-img"
            />
          </div>

          <div className="login-card-greeting-and-form-container">
            <h1 className="login-card-greeting">Welcome Back!</h1>
            <form className="login-card-form" onSubmit={this.onLogin}>
              <label htmlFor="userId" className="input-label">
                User ID
              </label>
              <input
                type="text"
                className="input-field"
                id="userId"
                placeholder="Enter User ID"
                value={userIdInput}
                onChange={this.onChangeUserId}
              />
              <label htmlFor="pin" className="input-label">
                PIN
              </label>
              <input
                type="password"
                className="input-field"
                id="pin"
                placeholder="Enter Password"
                value={pinInput}
                onChange={this.onChangePin}
              />
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            {showErrorMsg && <p className="error-msg">{errorMsg}</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default Login
