import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => {
  const darkImgUrl =
    'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
  const lightImgUrl =
    'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <Navbar />
            <div
              className={`home-container ${
                isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg'
              }`}
            >
              <img
                className="home-img"
                src={isDarkTheme ? darkImgUrl : lightImgUrl}
                alt="home"
              />
              <h1
                className={`home-heading ${
                  isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
                }`}
              >
                Home
              </h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home
