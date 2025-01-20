import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import CourseItem from '../CourseItem'
import FailureView from '../FailureView'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const fetchStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TechEra extends Component {
  state = {
    coursesList: [],
    fetchStatus: fetchStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchCourses()
  }

  fetchCourses = async () => {
    this.setState({
      fetchStatus: fetchStatusConstants.inProgress,
    })
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok) {
      const data = await response.json()
      const formattedCoursesList = data.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logoUrl: eachItem.logo_url,
      }))

      this.setState({
        coursesList: formattedCoursesList,
        fetchStatus: fetchStatusConstants.success,
      })
    } else {
      this.setState({
        fetchStatus: fetchStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {coursesList} = this.state
    return (
      <div className="container">
        <h1 className="heading">Courses</h1>
        <ul className="courses-list-container">
          {coursesList.map(eachItem => (
            <CourseItem courseDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </div>
  )

  renderCourses = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case fetchStatusConstants.success:
        return this.renderSuccessView()
      case fetchStatusConstants.failure:
        return <FailureView onClickRetry={this.fetchCourses} />
      case fetchStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="tech-era-container">{this.renderCourses()}</div>
      </>
    )
  }
}

export default TechEra
