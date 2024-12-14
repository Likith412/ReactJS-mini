import './index.css'

const PasswordItem = props => {
  const {passwordObj, isMasked, onDeletePassword} = props
  const {id, website, username, password, profileColor} = passwordObj

  const renderStars = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )

  const onClickDelete = () => {
    onDeletePassword(id)
  }

  return (
    <li className="passwords-list-item">
      <div className="item-details-container">
        <div className={`item-profile-container ${profileColor}`}>
          <p className="item-profile-text">{website[0].toUpperCase()}</p>
        </div>
        <div className="item-text-container">
          <p className="item-website">{website}</p>
          <p className="item-username">{username}</p>
          {isMasked && renderStars()}
          {!isMasked && <p className="item-password">{password}</p>}
        </div>
      </div>
      <div className="item-delete-btn-container">
        <button
          className="item-delete-btn"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
