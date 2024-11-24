// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const filteredDestinationsList = destinationsList.filter(
      eachDestination => {
        const eachDestinationName = eachDestination.name.toLowerCase()
        return eachDestinationName.includes(searchInput.toLowerCase())
      },
    )

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              onChange={this.onSearchInputChange}
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinations-list-container">
            {filteredDestinationsList.map(eachItem => (
              <DestinationItem key={eachItem.id} itemObj={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
