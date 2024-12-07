// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateTimeInput: '',
    showStarred: false,
  }

  toggleStarred = () => {
    this.setState(prevState => ({
      showStarred: !prevState.showStarred,
    }))
  }

  toggleStarredInAppointment = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onChangeDateTimeInput = event => {
    this.setState({
      dateTimeInput: event.target.value,
    })
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {titleInput, dateTimeInput} = this.state
    if (titleInput.length !== '' && dateTimeInput !== '') {
      const newAppointment = {
        id: uuidv4(),
        title: titleInput,
        dateTime: dateTimeInput,
        isStarred: false,
      }

      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        titleInput: '',
        dateTimeInput: '',
      }))
    }
  }

  render() {
    let filteredAppointmentsList
    const {appointmentsList, titleInput, dateTimeInput} = this.state
    const {showStarred} = this.state
    if (showStarred === true) {
      filteredAppointmentsList = appointmentsList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      )
    } else {
      filteredAppointmentsList = [...appointmentsList]
    }

    return (
      <div className="bg-container">
        <div className="card">
          <div className="container">
            <div className="card-top">
              <div className="card-top-left">
                <h1 className="heading">Add Appointment</h1>
                <form onSubmit={this.onAddAppointment}>
                  <label className="label" htmlFor="titleInput">
                    TITLE
                  </label>
                  <br />
                  <input
                    className="input"
                    id="titleInput"
                    type="text"
                    onChange={this.onChangeTitleInput}
                    value={titleInput}
                    placeholder="Title"
                  />
                  <br />
                  <label className="label" htmlFor="dateTimeInput">
                    DATE
                  </label>
                  <br />
                  <input
                    className="input"
                    id="dateTimeInput"
                    type="date"
                    onChange={this.onChangeDateTimeInput}
                    value={dateTimeInput}
                  />
                  <br />
                  <button className="button" type="submit">
                    Add
                  </button>
                </form>
              </div>
              <div className="card-top-right">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                  className="image"
                  alt="appointments"
                />
              </div>
            </div>
            <hr className="seperator" />
            <div className="card-bottom">
              <div className="flex-container">
                <h1 className="card-bottom-heading">Appointments</h1>
                <button
                  className={showStarred ? 'starred filled' : 'starred'}
                  onClick={this.toggleStarred}
                  type="button"
                >
                  Starred
                </button>
              </div>
              <ul className="appointments-container">
                {filteredAppointmentsList.map(eachAppointment => (
                  <AppointmentItem
                    appointmentObj={eachAppointment}
                    key={eachAppointment.id}
                    toggleStarredInAppointment={this.toggleStarredInAppointment}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
