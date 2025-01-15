import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <div className="movie-item-img-container">
        <Popup
          modal
          trigger={
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="movie-item-img"
            />
          }
          className="popup-content"
        >
          {close => (
            <>
              <div className="close-btn-container">
                <button
                  className="close-btn"
                  type="button"
                  onClick={close}
                  data-testid="closeButton"
                >
                  <IoMdClose className="close-btn-icon" />
                </button>
              </div>
              <div className="video-player-container">
                <ReactPlayer
                  url={videoUrl}
                  width="90%"
                  height="400px"
                  controls
                />
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default MovieItem
