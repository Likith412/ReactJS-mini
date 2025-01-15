import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #223a5f;
  padding: 20px 0px;
`

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`

export const ChoicesListContainer = styled.ul`
  align-self: center;
  padding: 0px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`
