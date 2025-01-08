import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => {
  const darkImgUrl =
    'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
  const lightImgUrl =
    'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <Navbar />
            <div
              className={`about-container ${
                isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg'
              }`}
            >
              <img
                className="about-img"
                src={isDarkTheme ? darkImgUrl : lightImgUrl}
                alt="about"
              />
              <h1
                className={`about-heading ${
                  isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
                }`}
              >
                About
              </h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default About
