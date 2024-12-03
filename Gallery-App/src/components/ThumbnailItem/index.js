// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageObj, updateGalleryImage, isSelected} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageObj
  const onClickImage = () => {
    console.log(thumbnailAltText)
    updateGalleryImage(id)
  }
  const selectedClass = isSelected ? 'selected' : ''

  return (
    <li className="thumbnail-item">
      <button
        className={`thumbnail-item-btn ${selectedClass}`}
        onClick={onClickImage}
        type="button"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-item-btn-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
