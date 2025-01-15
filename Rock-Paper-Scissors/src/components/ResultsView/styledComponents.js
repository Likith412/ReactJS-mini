import styled from 'styled-components'

export const ResultsViewContainer = styled.div`
  align-self: center;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`

export const ResultChoicesContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ResultChoicesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemPlayer = styled.h1`
  font-family: "Roboto"
  font-weight: 900;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const ItemImg = styled.img`
  width: 120px;

  @media (min-width: 768px) {
    width: 180px;
  }
`

export const ResultStatus = styled.p`
  font-family: "Roboto"
  font-weight: 900;
  color: #ffffff;
  font-size: 22px;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`

export const PlayAgainBtn = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  border-style: none;
  border-radius: 5px;
  width: 130px;
  height: 30px;
  cursor: pointer;
  margin-top: 20px;

  @media (min-width: 768px) {
    height: 35px;
    width: 140px;
    font-size: 18px;
  }
`
