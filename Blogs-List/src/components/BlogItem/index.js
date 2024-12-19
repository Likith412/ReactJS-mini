// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogObj} = props
  const {title, publishedDate, description} = blogObj
  return (
    <>
      <li className="blogs-list-item">
        <div className="list-item-heading-container">
          <h1 className="list-item-title">{title}</h1>
          <p className="list-item-published-date">{publishedDate}</p>
        </div>
        <p className="list-item-description">{description}</p>
      </li>
      <hr className="seperator" />
    </>
  )
}

export default BlogItem
