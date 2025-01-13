import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div className="time-line-course-card">
      <div className="course-title-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="course-duration-icon" />
          <p className="course-duration-text">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tags-list-container">
        {tagsList.map(eachTag => (
          <li className="tags-list-item" key={eachTag.id}>
            <p className="tags-list-item-text">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
