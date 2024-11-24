// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemObj} = props
  const {name, imgUrl} = itemObj
  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-item-img" />
      <p className="destination-item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
