import styled from 'styled-components'

export const ScorecardContainer = styled.div`
  border: 2px solid #ffffff;
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
`

export const ScorecardHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.5;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
export const ScorecardScoreContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 10px;
  width: 120px;

  @media (min-width: 768px) {
    width: 140px;
  }
`

export const ScorecardScoreHeading = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #223a5f;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const ScorecardScoreText = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 900;
  color: #223a5f;
  margin-top: 10px;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`
