import {
  ResultsViewContainer,
  ResultChoicesContainer,
  ResultChoicesItem,
  ItemPlayer,
  ItemImg,
  ResultStatus,
  PlayAgainBtn,
} from './styledComponents'

const ResultsView = props => {
  const {
    gameStatus,
    myChoiceImageUrl,
    opponentChoiceImageUrl,
    onClickPlayAgain,
  } = props

  const getGameResultText = () => {
    switch (gameStatus) {
      case 'WON':
        return 'YOU WON'
      case 'LOST':
        return 'YOU LOSE'
      case 'DRAW':
        return 'IT IS DRAW'
      default:
        return null
    }
  }

  return (
    <ResultsViewContainer>
      <ResultChoicesContainer>
        <ResultChoicesItem>
          <ItemPlayer>YOU</ItemPlayer>
          <ItemImg src={myChoiceImageUrl} alt="your choice" />
        </ResultChoicesItem>
        <ResultChoicesItem>
          <ItemPlayer>OPPONENT</ItemPlayer>
          <ItemImg src={opponentChoiceImageUrl} alt="opponent choice" />
        </ResultChoicesItem>
      </ResultChoicesContainer>
      <ResultStatus>{getGameResultText()}</ResultStatus>
      <PlayAgainBtn onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainBtn>
    </ResultsViewContainer>
  )
}

export default ResultsView
