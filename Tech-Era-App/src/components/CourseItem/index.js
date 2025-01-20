import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails
  return (
    <li className="courses-list-item">
      <Link to={`/courses/${id}`} className="course-list-item-link">
        <img src={logoUrl} alt={name} className="courses-list-item-logo" />
        <p className="courses-list-item-name">{name}</p>
      </Link>
    </li>
  )
}

export default CourseItem
