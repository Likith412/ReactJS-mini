import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  onDelete = uniqueId => {
    const {historyList} = this.state
    const filteredHistoryList = historyList.filter(
      eachItem => eachItem.id !== uniqueId,
    )

    this.setState({historyList: filteredHistoryList})
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  renderHistoryList = filteredHistoryList => {
    if (filteredHistoryList.length === 0) {
      return (
        <div className="no-list-signal-container">
          <p className="no-list-signal">There is no history to show</p>
        </div>
      )
    }
    return (
      <ul className="history-container">
        {filteredHistoryList.map(eachItem => (
          <HistoryItem
            itemObject={eachItem}
            key={eachItem.id}
            onDelete={this.onDelete}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {searchInput, historyList} = this.state
    const filteredHistoryList = historyList.filter(eachItem => {
      const eachItemTitle = eachItem.title.toLowerCase()
      return eachItemTitle.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
                className="navbar-logo"
              />
            </div>
            <div className="navbar-search-container">
              <div className="navbar-search">
                <div className="navbar-search-img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                    alt="search"
                    className="navbar-search-img"
                  />
                </div>
                <input
                  type="search"
                  className="navbar-search-input"
                  onChange={this.onSearchInputChange}
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="body">
          {this.renderHistoryList(filteredHistoryList)}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
