import {Component} from 'react'
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initital: 'INITITAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    vaccinationData: {},
    apiStatus: apiStatusConstants.initital,
  }

  componentDidMount() {
    this.fetchVaccinationData()
  }

  fetchVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(eachItem => ({
          vaccineDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        vaccinationData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVaccinationCoverageChart = () => {
    const {vaccinationData} = this.state
    const {last7DaysVaccination} = vaccinationData

    return (
      <BarChart
        width={1000}
        height={300}
        data={last7DaysVaccination}
        className="bar-chart"
      >
        <XAxis dataKey="vaccineDate" />
        <YAxis />
        <Legend
          wrapperStyle={{
            padding: 10,
          }}
        />
        <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" />
      </BarChart>
    )
  }

  renderVaccinationByGenderChart = () => {
    const {vaccinationData} = this.state
    const {vaccinationByGender} = vaccinationData
    return (
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByGender}
          dataKey="count"
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="80%"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" wrapperStyle={{padding: 20}} />
      </PieChart>
    )
  }

  renderVaccinationByAgeChart = () => {
    const {vaccinationData} = this.state
    const {vaccinationByAge} = vaccinationData
    return (
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAge}
          dataKey="count"
          cx="50%"
          cy="50%"
          outerRadius="80%"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill=" #64c2a6" />
        </Pie>
        <Legend iconType="circle" wrapperStyle={{padding: 20}} />
      </PieChart>
    )
  }

  renderSuccessView = () => (
    <>
      <div className="cowin-dashboard-chart-container">
        <h1 className="chart-heading">Vaccination Coverage</h1>
        {this.renderVaccinationCoverageChart()}
      </div>
      <div className="cowin-dashboard-chart-container">
        <h1 className="chart-heading">Vaccination By gender</h1>
        {this.renderVaccinationByGenderChart()}
      </div>
      <div className="cowin-dashboard-chart-container">
        <h1 className="chart-heading">Vaccination By age</h1>
        {this.renderVaccinationByAgeChart()}
      </div>
    </>
  )

  renderInProgressView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-heading">Something went wrong</h1>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    let content
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        content = this.renderInProgressView()
        break
      case apiStatusConstants.success:
        content = this.renderSuccessView()
        break
      case apiStatusConstants.failure:
        content = this.renderFailureView()
        break
      default:
        content = null
    }
    return (
      <div className="bg-container">
        <div className="cowin-dashboard-container">
          <div className="cowin-dashboard-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              className="website-logo"
              alt="website logo"
            />
            <h1 className="website-name">Co-WIN</h1>
          </div>
          <div className="cowin-dashboard-body">
            <h1 className="cowin-dashboard-heading">
              CoWIN Vaccination in India
            </h1>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard
