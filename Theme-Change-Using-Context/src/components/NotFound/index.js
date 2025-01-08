import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={`not-found-container ${
              isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg'
            }`}
          >
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1
              className={`not-found-heading ${
                isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
              }`}
            >
              Lost Your Way?
            </h1>
            <p
              className={`not-found-text ${
                isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
              }`}
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
