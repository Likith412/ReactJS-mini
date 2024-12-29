import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const renderNoActiveEventView = () => (
  <div className="no-active-events-container">
    <div className="container">
      <p className="no-active-events-text">
        Click on an event, to view its registration details
      </p>
    </div>
  </div>
)

const renderYetToRegisterView = () => (
  <div className="yet-to-register-container">
    <div className="container flex-container">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-text">
        A Live Performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-btn">
        Register Here
      </button>
    </div>
  </div>
)

const renderRegisteredView = () => (
  <div className="event-registered-container">
    <div className="container flex-container">
      <img
        className="event-registered-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="event-registered-text">
        You have already registered for the event
      </h1>
    </div>
  </div>
)

const renderRegistrationsClosedView = () => (
  <div className="registrations-closed-container">
    <div className="container flex-container">
      <img
        className="registrations-closed-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  </div>
)

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  switch (registrationStatus) {
    case registrationStatusConstants.initial:
      return renderNoActiveEventView()
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegisterView()
    case registrationStatusConstants.registered:
      return renderRegisteredView()
    case registrationStatusConstants.registrationsClosed:
      return renderRegistrationsClosedView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
