import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="alert">
      <div className="alert-details-container">{children}</div>
      <GrFormClose className="alert-close-icon" />
    </div>
  )
}

export default Notification
