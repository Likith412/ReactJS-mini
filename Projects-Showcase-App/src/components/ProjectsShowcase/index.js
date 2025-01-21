import {Component} from 'react'
import Loader from 'react-loader-spinner'

import ProjectItem from '../ProjectItem'
import Header from '../Header'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const fetchStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProjectShowCase extends Component {
  state = {
    projectsList: [],
    selectedCategoryId: categoriesList[0].id,
    fetchStatus: fetchStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchProjects()
  }

  fetchProjects = async () => {
    this.setState({
      fetchStatus: fetchStatusConstants.inProgress,
    })
    const {selectedCategoryId} = this.state

    const url = `https://apis.ccbp.in/ps/projects?category=${selectedCategoryId}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.projects.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
      }))

      this.setState({
        projectsList: formattedData,
        fetchStatus: fetchStatusConstants.success,
      })
    } else {
      this.setState({
        fetchStatus: fetchStatusConstants.failure,
      })
    }
  }

  onChangeSelectedCategory = event => {
    this.setState(
      {
        selectedCategoryId: event.target.value,
      },
      this.fetchProjects,
    )
  }

  onRetry = () => {
    this.fetchProjects()
  }

  renderSuccessView = () => {
    const {projectsList} = this.state
    return (
      <ul className="projects-list-container">
        {projectsList.map(eachItem => (
          <ProjectItem key={eachItem.id} projectDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        className="failure-view-img"
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
      <p className="failure-view-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="failure-view-btn" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#328af2" />
    </div>
  )

  renderProjectsList = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case fetchStatusConstants.success:
        return this.renderSuccessView()
      case fetchStatusConstants.failure:
        return this.renderFailureView()
      case fetchStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {selectedCategoryId} = this.state
    return (
      <>
        <Header />
        <div className="bg-container">
          <div className="container">
            <select
              className="input-field"
              value={selectedCategoryId}
              onChange={this.onChangeSelectedCategory}
            >
              {categoriesList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            {this.renderProjectsList()}
          </div>
        </div>
      </>
    )
  }
}

export default ProjectShowCase
