import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

/* 
{
  id: ....,
  text: ....,
}
*/

class App extends Component {
  state = {
    userInput: '',
    savedWordsList: [],
  }

  onChangeUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  addWord = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput.length !== 0) {
      const newWord = {
        id: uuidv4(),
        text: userInput,
      }
      this.setState(prevState => ({
        savedWordsList: [...prevState.savedWordsList, newWord],
        userInput: '',
      }))
    }
  }

  renderNoWordsView = () => (
    <div className="no-words-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-words-view-img"
      />
    </div>
  )

  renderWordsView = () => {
    const {savedWordsList} = this.state
    return (
      <ul className="saved-words-list-container">
        {savedWordsList.map(eachItem => (
          <li className="list-item" key={eachItem.id}>
            <p className="list-item-text">
              {eachItem.text}: {eachItem.text.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {userInput, savedWordsList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="card-left-container">
            <h1 className="card-left-heading">
              Count the characters like a Boss...
            </h1>
            {savedWordsList.length === 0
              ? this.renderNoWordsView()
              : this.renderWordsView()}
          </div>
          <div className="card-right-container">
            <h1 className="card-right-heading">Character Counter</h1>
            <form className="card-form" onSubmit={this.addWord}>
              <input
                type="text"
                className="input-field"
                onChange={this.onChangeUserInput}
                value={userInput}
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
