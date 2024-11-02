// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  const cardClassName = `technology-card ${className}`
  return (
    <li className={cardClassName}>
      <div className="technology-card-text-container">
        <h1 className="technology-card-title">{title}</h1>
        <p className="technology-card-description">{description}</p>
      </div>
      <img className="technology-card-img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
