// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationObj, onDenominationButtonClick} = props
  const {value} = denominationObj
  const onButtonClick = () => {
    onDenominationButtonClick(value)
  }

  return (
    <li className="denomination-list-item">
      <button
        className="denomination-list-item-btn"
        type="button"
        onClick={onButtonClick}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
