// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  changeInputField = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredSuggestionsList = suggestionsList.filter(eachSuggestion => {
      const eachSuggestionText = eachSuggestion.suggestion.toLowerCase()
      return eachSuggestionText.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
            alt="google logo"
          />
        </div>
        <div className="search">
          <div className="search-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="search-suggestions-list">
              {filteredSuggestionsList.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionObj={eachSuggestion}
                  changeInputField={this.changeInputField}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
