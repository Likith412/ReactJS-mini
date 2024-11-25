// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionObj, changeInputField} = props
  const {suggestion} = suggestionObj
  const onClickArrow = () => {
    changeInputField(suggestionObj.suggestion)
  }

  return (
    <li className="search-suggestion-item">
      <p className="search-suggestion-item-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        className="arrow-icon"
        alt="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
