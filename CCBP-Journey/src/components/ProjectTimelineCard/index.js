import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, duration, description} = projectDetails
  const {projectUrl} = projectDetails

  return (
    <div className="time-line-project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-and-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="project-duration-icon" />
          <p className="project-duration-text">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
