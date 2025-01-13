import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF <br />
        <span className="heading-part">CCBP 4.0</span>
      </h1>
      <div className="time-line-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return <CourseTimelineCard courseDetails={eachItem} />
            }
            return <ProjectTimelineCard projectDetails={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
