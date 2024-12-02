import './index.css'

const HistoryItem = props => {
  const {itemObject, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemObject
  const onDeleteHistoryItem = () => {
    onDelete(id)
  }
  return (
    <li className="history-item">
      <p className="history-item-time">{timeAccessed}</p>
      <div className="history-item-domain">
        <div className="history-item-domain-left">
          <img
            src={logoUrl}
            alt="domain logo"
            className="history-item-domain-logo"
          />
          <div className="history-item-domain-text-container">
            <p className="history-item-domain-name">{title}</p>
            <p className="history-item-domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          onClick={onDeleteHistoryItem}
          data-testid="delete"
          className="history-item-delete-btn"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="history-item-delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
