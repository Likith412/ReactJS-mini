// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogDetails
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details-container">
            <h1 className="blog-title">{title}</h1>
            <div className="blog-author-container">
              <img
                src={avatarUrl}
                className="blog-author-avatar"
                alt={`avatar${id}`}
              />
              <p className="blog-author-name">{author}</p>
            </div>
            <img src={imageUrl} className="blog-img" alt={title} />
            <p className="blog-description">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
