// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  toggleActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faqObj} = this.props
    const {questionText, answerText} = faqObj

    const renderAnswer = () => (
      <div className="faq-answer-container">
        <hr className="seperator" />
        <p className="faq-answer">{answerText}</p>
      </div>
    )

    return (
      <li className="faqs-list-item">
        <div className="faq-question-container">
          <h1 className="faq-question">{questionText}</h1>
          <button
            className="faq-show-hide-btn"
            type="button"
            onClick={this.toggleActive}
          >
            <img
              src={
                isActive
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              className="faq-show-hide-btn-img"
              alt={isActive ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {isActive && renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
