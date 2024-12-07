// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentObj, toggleStarredInAppointment} = props
  const {id, title, dateTime, isStarred} = appointmentObj
  const onClickStar = () => {
    toggleStarredInAppointment(id)
  }

  const formattedDateTime = format(new Date(dateTime), 'dd MMMM yyyy, EEEE')
  const imageSrcUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointments-item">
      <div>
        <p className="appointments-item-title">{title}</p>
        <p className="appointments-item-date">Date: {formattedDateTime}</p>
      </div>
      <button
        onClick={onClickStar}
        type="button"
        className="star-btn"
        data-testid="star"
      >
        <img src={imageSrcUrl} className="star-img" alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
