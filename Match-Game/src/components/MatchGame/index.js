import {Component} from 'react'
import Navbar from '../Navbar'
import ScoreCard from '../ScoreCard'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList, tabsList} = props
    this.state = {
      randomImage: imagesList[0],
      selectedTabId: tabsList[0].tabId,
      isGameOver: false,
      timeLeft: 60,
      score: 0,
    }
  }

  componentDidMount() {
    this.startAndStopTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startAndStopTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timeLeft === 0) {
          // Timeup
          clearInterval(this.timerId)
          return {
            isGameOver: true,
          }
        }
        return {
          timeLeft: prevState.timeLeft - 1,
        }
      })
    }, 1000)
  }

  onClickTab = tabId => {
    this.setState({
      selectedTabId: tabId,
    })
  }

  onClickThumbnail = id => {
    const {imagesList} = this.props
    const {randomImage} = this.state

    if (id === randomImage.id) {
      // Selected Correct Image
      const randomIndex = Math.floor(Math.random() * imagesList.length)
      this.setState(prevState => ({
        randomImage: imagesList[randomIndex],
        score: prevState.score + 1,
      }))
    } else {
      // Selected Wrong Image
      clearInterval(this.timerId)
      this.setState({isGameOver: true})
    }
  }

  renderGame = () => {
    const {tabsList, imagesList} = this.props
    const {selectedTabId, randomImage} = this.state

    const filteredImagesList = imagesList.filter(
      eachImage => eachImage.category === selectedTabId,
    )

    return (
      <div className="game-container">
        <div className="container">
          <img src={randomImage.imageUrl} className="game-image" alt="match" />
          <ul className="tab-items-container">
            {tabsList.map(eachTab => (
              <TabItem
                tabObj={eachTab}
                key={eachTab.tabId}
                isSelected={eachTab.tabId === selectedTabId}
                onClickTab={this.onClickTab}
              />
            ))}
          </ul>
          <ul className="thumbnail-items-container">
            {filteredImagesList.map(eachImage => (
              <ThumbnailItem
                thumbnailObj={eachImage}
                key={eachImage.id}
                onClickThumbnail={this.onClickThumbnail}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  onClickReset = () => {
    const {imagesList, tabsList} = this.props
    this.setState({
      randomImage: imagesList[0],
      selectedTabId: tabsList[0].tabId,
      isGameOver: false,
      timeLeft: 60,
      score: 0,
    })
    this.startAndStopTimer()
  }

  render() {
    const {isGameOver, score, timeLeft} = this.state
    return (
      <div className="bg-container">
        <Navbar score={score} timeLeft={timeLeft} />
        {isGameOver && (
          <ScoreCard onClickReset={this.onClickReset} score={score} />
        )}
        {!isGameOver && this.renderGame()}
      </div>
    )
  }
}

export default MatchGame
