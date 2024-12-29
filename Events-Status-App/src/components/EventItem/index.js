import './index.css'

const EventItem = props => {
  const {eventObj, changeSelectedEvent, isSelected} = props
  const {id, name, imageUrl, location} = eventObj

  const selectedClassName = isSelected ? 'selected-item' : null
  const onClickEvent = () => {
    changeSelectedEvent(id)
  }

  return (
    <li className="events-list-item">
      <button
        className={`list-item-btn ${selectedClassName}`}
        onClick={onClickEvent}
        type="button"
      >
        <img className="list-item-btn-img" src={imageUrl} alt="event" />
      </button>
      <p className="list-item-name">{name}</p>
      <p className="list-item-location">{location}</p>
    </li>
  )
}

export default EventItem
