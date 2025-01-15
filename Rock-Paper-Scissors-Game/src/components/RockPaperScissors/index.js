import {Component} from 'react'

import ScoreCard from '../ScoreCard'
import ChoiceItem from '../ChoiceItem'
import RulesView from '../RulesView'
import ResultsView from '../ResultsView'

import {BgContainer, Container, ChoicesListContainer} from './styledComponents'

const gameStatusConstants = {
  playing: 'PLAYING',
  won: 'WON',
  draw: 'DRAW',
  lost: 'LOST',
}

class RockPaperScissors extends Component {
  state = {
    gameStatus: gameStatusConstants.playing,
    myChoiceId: '',
    opponentChoiceId: '',
    score: 0,
  }

  // ************************** When Clicking on Play Again **************************
  onClickPlayAgain = () => {
    this.setState({
      gameStatus: gameStatusConstants.playing,
      myChoiceId: '',
      opponentChoiceId: '',
    })
  }
  // ***********************************************************************************

  getGameResult = (myChoiceId, opponentChoiceId) => {
    if (myChoiceId === opponentChoiceId) {
      return gameStatusConstants.draw
    }

    if (
      (myChoiceId === 'PAPER' && opponentChoiceId === 'ROCK') ||
      (myChoiceId === 'ROCK' && opponentChoiceId === 'SCISSORS') ||
      (myChoiceId === 'SCISSORS' && opponentChoiceId === 'PAPER')
    ) {
      return gameStatusConstants.won
    }

    return gameStatusConstants.lost
  }
  // ************************** When Choice is Selected **************************

  onChoiceSelected = selectedChoiceId => {
    const {choicesList} = this.props

    // Generating Opponent Choice Randomly
    const randomNumber = Math.floor(Math.random() * 3)
    const randomChoice = choicesList[randomNumber]
    const randomChoiceId = randomChoice.id

    const gameResult = this.getGameResult(selectedChoiceId, randomChoiceId)
    this.setState(prevState => {
      if (gameResult === gameStatusConstants.won) {
        return {
          myChoiceId: selectedChoiceId,
          opponentChoiceId: randomChoiceId,
          gameStatus: gameResult,
          score: prevState.score + 1,
        }
      }
      if (gameResult === gameStatusConstants.lost) {
        return {
          myChoiceId: selectedChoiceId,
          opponentChoiceId: randomChoiceId,
          gameStatus: gameResult,
          score: prevState.score - 1,
        }
      }
      // When Draw then Score will not Change
      return {
        myChoiceId: selectedChoiceId,
        opponentChoiceId: randomChoiceId,
        gameStatus: gameResult,
      }
    })
  }

  // ************************** When Clicking on Play Again **************************

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <ChoicesListContainer>
        {choicesList.map(eachItem => (
          <ChoiceItem
            key={eachItem.id}
            choiceDetails={eachItem}
            onChoiceSelected={this.onChoiceSelected}
          />
        ))}
      </ChoicesListContainer>
    )
  }

  renderResultsView = () => {
    const {myChoiceId, opponentChoiceId, gameStatus} = this.state
    const {choicesList} = this.props

    // Getting My-Choice Object
    const myChoice = choicesList.find(eachItem => eachItem.id === myChoiceId)

    // Getting Opponent-Choice Object
    const opponentChoice = choicesList.find(
      eachItem => eachItem.id === opponentChoiceId,
    )

    return (
      <ResultsView
        myChoiceImageUrl={myChoice.imageUrl}
        opponentChoiceImageUrl={opponentChoice.imageUrl}
        gameStatus={gameStatus}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  render() {
    const {gameStatus, score} = this.state
    return (
      <BgContainer>
        <Container>
          <ScoreCard score={score} />
          {gameStatus === gameStatusConstants.playing
            ? this.renderPlayingView()
            : this.renderResultsView()}
          <RulesView />
        </Container>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
