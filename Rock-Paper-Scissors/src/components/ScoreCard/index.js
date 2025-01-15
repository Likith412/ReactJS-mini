import {
  ScorecardContainer,
  ScorecardHeading,
  ScorecardScoreContainer,
  ScorecardScoreHeading,
  ScorecardScoreText,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props

  return (
    <ScorecardContainer>
      <ScorecardHeading>
        Rock
        <br />
        Paper
        <br />
        Scissors
      </ScorecardHeading>
      <ScorecardScoreContainer>
        <ScorecardScoreHeading>Score</ScorecardScoreHeading>
        <ScorecardScoreText>{score}</ScorecardScoreText>
      </ScorecardScoreContainer>
    </ScorecardContainer>
  )
}
export default ScoreCard
