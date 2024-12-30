import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguaugeFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const fetchStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class GithubPopularRepos extends Component {
  state = {
    selectedFilterId: languageFiltersData[0].id,
    popularReposList: [],
    fetchStatus: fetchStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchRepositoriesList()
  }

  fetchRepositoriesList = async () => {
    this.setState({fetchStatus: fetchStatusConstants.inProgress})
    const {selectedFilterId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedFilterId}`
    try {
      const response = await fetch(url)
      if (response.ok === true) {
        const data = await response.json()
        const popularRepos = data.popular_repos
        const formattedPopularRepos = popularRepos.map(eachItem => ({
          id: eachItem.id,
          name: eachItem.name,
          issuesCount: eachItem.issues_count,
          forksCount: eachItem.forks_count,
          starsCount: eachItem.stars_count,
          avatarUrl: eachItem.avatar_url,
        }))

        this.setState({
          popularReposList: formattedPopularRepos,
          fetchStatus: fetchStatusConstants.success,
        })
      }
    } catch (error) {
      console.log(error)
      this.setState({
        fetchStatus: fetchStatusConstants.failure,
      })
    }
  }

  changeSelectedFilter = id => {
    this.setState(
      {
        selectedFilterId: id,
      },
      this.fetchRepositoriesList,
    )
  }

  renderFetchInProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFetchSuccessView = () => {
    const {popularReposList} = this.state
    return (
      <ul className="popular-repos-list-container">
        {popularReposList.map(eachItem => (
          <RepositoryItem key={eachItem.id} repositoryDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderFetchFailureView = () => (
    <div className="failure-container">
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-text">Something Went Wrong</h1>
    </div>
  )

  renderPopularReposList = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case fetchStatusConstants.inProgress:
        return this.renderFetchInProgressView()
      case fetchStatusConstants.success:
        return this.renderFetchSuccessView()
      case fetchStatusConstants.failure:
        return this.renderFetchFailureView()
      default:
        return null
    }
  }

  render() {
    const {selectedFilterId} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Popular</h1>
          <ul className="filters-list-container">
            {languageFiltersData.map(eachItem => (
              <LanguaugeFilterItem
                filterDetails={eachItem}
                key={eachItem.id}
                isSelected={selectedFilterId === eachItem.id}
                changeSelectedFilter={this.changeSelectedFilter}
              />
            ))}
          </ul>
          {this.renderPopularReposList()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
