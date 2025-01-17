import {Component} from 'react'
import {IoMdSearch} from 'react-icons/io'

import TrackItem from '../TrackItem'

import './index.css'

class MusicPlaylist extends Component {
  state = {
    searchInput: '',
    tracksList: [],
  }

  componentDidMount() {
    const {initialTracksList} = this.props
    this.setState({
      tracksList: initialTracksList,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteTrack = id => {
    const {tracksList} = this.state
    const filteredTracksList = tracksList.filter(eachItem => eachItem.id !== id)
    this.setState({
      tracksList: filteredTracksList,
    })
  }

  renderTracksView = tracksList => (
    <ul className="tracks-list-container">
      {tracksList.map(eachItem => (
        <TrackItem
          trackDetails={eachItem}
          deleteTrack={this.deleteTrack}
          key={eachItem.id}
        />
      ))}
    </ul>
  )

  renderNoTracksView = () => (
    <div className="no-tracks-container">
      <p className="no-tracks-text">No Songs Found</p>
    </div>
  )

  render() {
    const {tracksList, searchInput} = this.state
    const filteredTracksList = tracksList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="singer-details-container">
          <h1 className="singer-name">Ed Sheeran</h1>
          <p className="singer-text">Singer</p>
        </div>
        <div className="songs-playlist-container">
          <div className="songs-playlist-header">
            <h1 className="songs-playlist-heading">Songs Playlist</h1>
            <div className="songs-playlist-search-container">
              <input
                type="search"
                className="songs-playlist-search-input"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <IoMdSearch className="songs-playlist-search-icon" />
            </div>
          </div>
          {filteredTracksList.length === 0
            ? this.renderNoTracksView()
            : this.renderTracksView(filteredTracksList)}
        </div>
      </div>
    )
  }
}

export default MusicPlaylist
