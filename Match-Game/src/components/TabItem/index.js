import './index.css'

const TabItem = props => {
  const {tabObj, isSelected, onClickTab} = props
  const {tabId, displayText} = tabObj
  const btnClassName = isSelected ? 'tab-item-btn selected' : 'tab-item-btn'

  const onClick = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tab-item">
      <button className={btnClassName} onClick={onClick} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
