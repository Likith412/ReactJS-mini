import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  onNameInputChange = event => {
    this.setState({nameInput: event.target.value})
  }

  onCommentInputChange = event => {
    this.setState({commentInput: event.target.value})
  }

  toggleLikeComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {
            ...eachComment,
            isLiked: !eachComment.isLiked,
          }
        }
        return eachComment
      }),
    })
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => id !== eachComment.id),
    })
  }

  onAddComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state
    const randomIndex = Math.floor(Math.random() * 7)

    const newComment = {
      id: uuidv4(),
      profileColor: initialContainerBackgroundClassNames[randomIndex],
      name: nameInput,
      time: new Date(),
      comment: commentInput,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Comments</h1>
          <div className="flex-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="image"
                alt="comments"
              />
            </div>
            <div className="input-container">
              <p className="input-text">Say Something about 4.0 Technologies</p>
              <form onSubmit={this.onAddComment}>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  onChange={this.onNameInputChange}
                  value={nameInput}
                />
                <textarea
                  className="input"
                  placeholder="Your Comment"
                  rows="6"
                  onChange={this.onCommentInputChange}
                  value={commentInput}
                />
                <button className="button" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr className="seperator" />
          <p className="comments-count">
            <span className="comments-count-value">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-container">
            {commentsList.map(eachComment => (
              <CommentItem
                commentObj={eachComment}
                key={eachComment.id}
                toggleLikeComment={this.toggleLikeComment}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
