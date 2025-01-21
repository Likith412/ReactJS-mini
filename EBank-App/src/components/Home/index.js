import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="bg-container">
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="navbar-logo"
        />
        <button type="button" className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </nav>
      <div className="home-container">
        <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
        <img
          className="home-card-img"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </div>
    </div>
  )
}
export default Home
