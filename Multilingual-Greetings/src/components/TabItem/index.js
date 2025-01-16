import './index.css'

const TabItem = props => {
  const {tabDetails, isSelected, changeSelectedTab} = props
  const {id, buttonText} = tabDetails

  const onClickTab = () => {
    changeSelectedTab(id)
  }

  return (
    <li className="tabs-list-item">
      <button
        className={`tabs-list-item-btn ${isSelected ? 'selected' : ''}`}
        type="button"
        onClick={onClickTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
