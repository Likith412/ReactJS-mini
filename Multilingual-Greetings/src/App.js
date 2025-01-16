import {Component} from 'react'

import TabItem from './components/TabItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    selectedTabId: languageGreetingsList[0].id,
  }

  changeSelectedTab = id => {
    this.setState({
      selectedTabId: id,
    })
  }

  render() {
    const {selectedTabId} = this.state
    const selectedGreetingObj = languageGreetingsList.find(
      eachItem => eachItem.id === selectedTabId,
    )
    const selectedGreetingImg = selectedGreetingObj.imageUrl
    const selectedGreetingImgAltText = selectedGreetingObj.imageAltText

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="tabs-list-container">
            {languageGreetingsList.map(eachItem => (
              <TabItem
                tabDetails={eachItem}
                key={eachItem.id}
                changeSelectedTab={this.changeSelectedTab}
                isSelected={selectedTabId === eachItem.id}
              />
            ))}
          </ul>
          <img
            src={selectedGreetingImg}
            alt={selectedGreetingImgAltText}
            className="greeting-img"
          />
        </div>
      </div>
    )
  }
}

export default App
