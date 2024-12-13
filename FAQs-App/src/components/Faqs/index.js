// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachFaq => (
            <FaqItem faqObj={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
