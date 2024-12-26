// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    submitSuccess: false,
    firstName: '',
    showFnameErrorMsg: false,
    lastName: '',
    showLnameErrorMsg: false,
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({
        showFnameErrorMsg: true,
      })
    } else {
      this.setState({
        showFnameErrorMsg: false,
      })
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({
        showLnameErrorMsg: true,
      })
    } else {
      this.setState({
        showLnameErrorMsg: false,
      })
    }
  }

  onFormSubmit = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        submitSuccess: true,
      })
    } else {
      if (firstName === '') {
        this.setState({
          showFnameErrorMsg: true,
        })
      }
      if (lastName === '') {
        this.setState({
          showLnameErrorMsg: true,
        })
      }
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      submitSuccess: false,
      firstName: '',
      showFnameErrorMsg: false,
      lastName: '',
      showLnameErrorMsg: false,
    })
  }

  renderFirstNameField = () => {
    const {firstName, showFnameErrorMsg} = this.state
    const errorClassName = showFnameErrorMsg ? 'error' : ''
    return (
      <>
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <br />
        <input
          type="text"
          className={`input-field ${errorClassName}`}
          id="firstName"
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showFnameErrorMsg && <p className="error-message">Required</p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, showLnameErrorMsg} = this.state
    const errorClassName = showLnameErrorMsg ? 'error' : ''
    return (
      <>
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <br />
        <input
          type="text"
          className={`input-field ${errorClassName}`}
          id="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showLnameErrorMsg && <p className="error-message">Required</p>}
      </>
    )
  }

  render() {
    const {submitSuccess} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Registration</h1>
          <div className="registration-card">
            {submitSuccess ? (
              <div className="success-container">
                <div className="success-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                    alt="success"
                    className="success-image"
                  />
                </div>
                <p className="success-text">Submitted Successfully</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.onSubmitAnotherResponse}
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={this.onFormSubmit}>
                <div className="input-container">
                  {this.renderFirstNameField()}
                </div>
                <div className="input-container">
                  {this.renderLastNameField()}
                </div>
                <button type="submit" className="button">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
