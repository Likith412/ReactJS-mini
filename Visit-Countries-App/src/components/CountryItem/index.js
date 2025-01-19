import './index.css'

const CountryItem = props => {
  const {countryDetails, markAsVisited} = props
  const {name, isVisited, id} = countryDetails

  const onClickVisit = () => {
    markAsVisited(id)
  }

  return (
    <li className="countries-list-item">
      <p className="countries-list-item-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button className="visit-btn" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
