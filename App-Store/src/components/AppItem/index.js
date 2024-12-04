// Write your code here
import './index.css'

const AppItem = props => {
  const {appObj} = props
  const {appName, imageUrl} = appObj
  return (
    <li className="apps-item">
      <img src={imageUrl} className="apps-item-img" alt={appName} />
      <p className="apps-item-name">{appName}</p>
    </li>
  )
}

export default AppItem
