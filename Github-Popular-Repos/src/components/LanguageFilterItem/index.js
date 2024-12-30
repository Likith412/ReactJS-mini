import './index.css'

const LanguageFilterItem = props => {
  const {filterDetails, isSelected, changeSelectedFilter} = props
  const {id, language} = filterDetails

  const selectedClassName = isSelected ? 'selected-btn' : null

  const onClickFilter = () => {
    changeSelectedFilter(id)
  }
  return (
    <li className="filters-list-item">
      <button
        className={`list-item-btn ${selectedClassName}`}
        type="button"
        onClick={onClickFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
