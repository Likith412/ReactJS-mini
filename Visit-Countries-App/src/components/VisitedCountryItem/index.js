import './index.css'

const VisitedCountryItem = props => {
  const {countryDetails, markAsUnvisited} = props
  const {imageUrl, name, id} = countryDetails

  const onClickRemove = () => {
    markAsUnvisited(id)
  }

  return (
    <li className="visited-countries-list-item">
      <img
        src={imageUrl}
        alt="thumbnail"
        className="visited-countries-list-item-img"
      />
      <div className="visited-countries-list-item-details">
        <p className="visited-countries-list-item-name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
