// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onFeedback = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderContent = () => {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    if (isFeedbackGiven === true) {
      return (
        <>
          <div className="thankyou-img-container">
            <img src={loveEmojiUrl} alt="love emoji" className="thankyou-img" />
          </div>
          <h1 className="thankyou-greeting-heading">Thank You!</h1>
          <p className="thankyou-greeting-para">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </>
      )
    }
    return (
      <>
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedback-options-container">
          {emojis.map(eachEmoji => (
            <li
              className="feedback-option"
              key={eachEmoji.id}
              onClick={this.onFeedback}
            >
              <img
                src={eachEmoji.imageUrl}
                className="feedback-option-img"
                alt={eachEmoji.name}
              />
              <p className="feedback-option-name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card">{this.renderContent()}</div>
      </div>
    )
  }
}

export default Feedback
