import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class YourPasswords extends Component {
  state = {
    searchInput: '',
    isMasked: true,
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  showOrHidePasswords = () => {
    this.setState(prevState => ({
      isMasked: !prevState.isMasked,
    }))
  }

  renderPasswordsList = searchResults => {
    const {isMasked} = this.state
    const {onDeletePassword} = this.props

    return (
      <ul className="passwords-list-container">
        {searchResults.map(eachItem => (
          <PasswordItem
            passwordObj={eachItem}
            key={eachItem.id}
            isMasked={isMasked}
            onDeletePassword={onDeletePassword}
          />
        ))}
      </ul>
    )
  }

  renderNoPasswordsMessage = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
        className="no-passwords-img"
        alt="no passwords"
      />
      <p className="no-passwords-text">No Passwords</p>
    </div>
  )

  render() {
    const {searchInput} = this.state
    const {passwordsList} = this.props

    const searchResults = passwordsList.filter(eachItem => {
      const itemWebsiteName = eachItem.website.toLowerCase()
      return itemWebsiteName.includes(searchInput.toLowerCase())
    })

    const count = searchResults.length
    const isFound = count !== 0

    return (
      <div className="your-passwords-container">
        <div className="your-passwords-header">
          <div className="header-text-container">
            <h1 className="header-text">Your Passwords</h1>
            <p className="passwords-count">{count}</p>
          </div>
          <div className="search-input-container">
            <div className="search-input-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-input-logo"
                alt="search"
              />
            </div>
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onSearchInputChange}
              value={searchInput}
            />
          </div>
        </div>
        <hr className="seperator" />
        <div className="your-passwords-body">
          <div className="show-passwords-container">
            <input
              type="checkbox"
              className="show-passwords-checkbox"
              id="showPasswordsCheckbox"
              onChange={this.showOrHidePasswords}
            />
            <label
              htmlFor="showPasswordsCheckbox"
              className="show-passwords-text"
            >
              Show Passwords
            </label>
          </div>
          {isFound && this.renderPasswordsList(searchResults)}
          {!isFound && this.renderNoPasswordsMessage()}
        </div>
      </div>
    )
  }
}

export default YourPasswords
