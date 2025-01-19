import './index.css'

const TagItem = props => {
  const {tagDetails, changeSelectedTag, isSelected} = props
  const {optionId, displayText} = tagDetails

  const onClickTag = () => {
    changeSelectedTag(optionId)
  }

  return (
    <li className="tags-list-item">
      <button
        type="button"
        className={`tags-list-item-btn ${isSelected ? 'selected' : ''}`}
        onClick={onClickTag}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
