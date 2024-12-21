// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogObj} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogObj
  return (
    <li className="blog-list-item">
      <Link to={`/blogs/${id}`} className="blog-list-item-link">
        <img src={imageUrl} className="list-item-img" alt={`image${id}`} />
        <div>
          <p className="list-item-topic">{topic}</p>
          <h1 className="list-item-title">{title}</h1>
          <div className="list-item-author-container">
            <img
              src={avatarUrl}
              className="list-item-author-avatar"
              alt={`avatar${id}`}
            />
            <p className="list-item-author-name">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
