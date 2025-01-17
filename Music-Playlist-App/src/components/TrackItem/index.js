import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, name, genre, imageUrl, duration} = trackDetails

  const onClickDelete = () => {
    deleteTrack(id)
  }

  return (
    <li className="tracks-list-item">
      <div className="track-img-and-details-container">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="track-details-container">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="track-duration-and-delete-btn-container">
        <p className="track-duration">{duration}</p>
        <button
          type="button"
          className="track-delete-btn"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <AiOutlineDelete className="track-delete-btn-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
