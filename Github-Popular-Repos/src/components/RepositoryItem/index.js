import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, avatarUrl} = repositoryDetails
  const {issuesCount, forksCount, starsCount} = repositoryDetails

  return (
    <li className="popular-repos-list-item">
      <div className="list-item-container">
        <div className="list-item-avatar-container">
          <img src={avatarUrl} alt={name} className="list-item-avatar" />
        </div>
        <h1 className="list-item-name">{name}</h1>
        <div className="list-item-details-container">
          <div className="list-item-details-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
              className="list-item-details-icon"
            />
            <p className="list-item-details-text">{starsCount} stars</p>
          </div>
          <div className="list-item-details-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
              className="list-item-details-icon"
            />
            <p className="list-item-details-text">{forksCount} forks</p>
          </div>
          <div className="list-item-details-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
              className="list-item-details-icon"
            />
            <p className="list-item-details-text">{issuesCount} open issues</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
