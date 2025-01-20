import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import FailureView from '../FailureView'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const fetchStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseDetails extends Component {
  state = {
    courseDetails: {},
    fetchStatus: fetchStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchCourseDetails()
  }

  fetchCourseDetails = async () => {
    this.setState({
      fetchStatus: fetchStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }

      this.setState({
        courseDetails: formattedData,
        fetchStatus: fetchStatusConstants.success,
      })
    } else {
      this.setState({
        fetchStatus: fetchStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {courseDetails} = this.state
    const {name = '', imageUrl = '', description = ''} = courseDetails
    return (
      <div className="course-details-card">
        <img src={imageUrl} alt={name} className="course-img" />
        <div className="course-text-container">
          <h1 className="course-name">{name}</h1>
          <p className="course-description">{description}</p>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </div>
  )

  renderCourseDetailsCard = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case fetchStatusConstants.success:
        return this.renderSuccessView()
      case fetchStatusConstants.failure:
        return <FailureView onClickRetry={this.fetchCourseDetails} />
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
        <div className="course-details-container">
          {this.renderCourseDetailsCard()}
        </div>
      </>
    )
  }
}

export default CourseDetails
