// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  onClickLeftArrow = () => {
    const {currentIndex} = this.state
    if (currentIndex !== 0) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    const lastIndex = reviewsList.length - 1
    if (currentIndex !== lastIndex) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
    }
  }

  render() {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewObj = reviewsList[currentIndex]
    const {imgUrl, username, companyName, description} = currentReviewObj
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <div className="carousel">
            <div className="carousel-indicator-btn-container">
              <button
                className="indicator-btn"
                type="button"
                onClick={this.onClickLeftArrow}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  className="indicator-btn-img"
                />
              </button>
            </div>
            <div className="carousel-content">
              <img
                src={imgUrl}
                className="carousel-content-profile-img"
                alt={username}
              />
              <p className="carousel-content-profile-name">{username}</p>
              <p className="carousel-content-profile-company">{companyName}</p>
              <p className="carousel-content-profile-review">{description}</p>
            </div>
            <div className="carousel-indicator-btn-container">
              <button
                className="indicator-btn"
                type="button"
                onClick={this.onClickRightArrow}
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  className="indicator-btn-img"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
