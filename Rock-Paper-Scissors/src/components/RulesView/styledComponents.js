import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 500;
  color: #000000;
  font-size: 16px;
  border-style: none;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 35px;
    font-size: 18px;
  }
`

export const CloseButtonAndRulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CloseButton = styled.button`
  font-size: 20px;
  color: #000000;
  padding: 5px;
  border: none;
  align-self: flex-end;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RulesImg = styled.img`
  width: 100%;
`
