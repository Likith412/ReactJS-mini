import './index.css'

const ThumbnailItem = props => {
  const {thumbnailObj, onClickThumbnail} = props
  const {id, thumbnailUrl} = thumbnailObj

  const onClick = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button className="img-btn" onClick={onClick} type="button">
        <img
          src={thumbnailUrl}
          className="thumbnail-item-img"
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
