import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentObj, toggleLikeComment, deleteComment} = props
  const {id, profileColor, name, comment, time, isLiked} = commentObj

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeClassName = isLiked ? 'liked' : ''

  const timeDistanceFromNow = formatDistanceToNow(time)

  const onClickLike = () => {
    toggleLikeComment(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comments-item">
      <div className="comments-item-top">
        <div className={`profile-logo ${profileColor}`}>
          <p className="profile-logo-inital">{name[0].toUpperCase()}</p>
        </div>
        <div className="comments-item-top-right">
          <div className="comment-details-container">
            <p className="profile-name">{name}</p>
            <p className="comment-time">{timeDistanceFromNow}</p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="comments-item-bottom">
        <button type="button" className="like-btn" onClick={onClickLike}>
          <img src={likeImg} className="like-img" alt="like" />
          <p className={`like-text ${likeClassName}`}>Like</p>
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="seperator" />
    </li>
  )
}

export default CommentItem
