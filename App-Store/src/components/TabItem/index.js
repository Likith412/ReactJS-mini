// Write your code here

import './index.css'

const TabItem = props => {
  const {tabObj, updateSelectedTab, isSelected} = props
  const {tabId, displayText} = tabObj

  const onButtonClick = () => {
    updateSelectedTab(tabId)
  }

  const selectedClass = isSelected ? 'selected' : ''

  return (
    <li className="tabs-item">
      <button
        type="button"
        className={`tabs-item-btn ${selectedClass}`}
        onClick={onButtonClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
