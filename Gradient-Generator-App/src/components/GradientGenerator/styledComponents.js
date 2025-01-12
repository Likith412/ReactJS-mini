import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  padding: 20px 0px;
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.firstColor}, ${props.secondColor})`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 90%;
  max-width: 500px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  color: #ededed;
  font-size: 25px;
  text-align: center;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 35px;
  }
  margin: 0px;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  line-height: 1.5;
  margin-top: 40px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`

export const GradientDirectionsListContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-directiom: row;
  justify-content: center;
  margin-bottom: 30px;
`

export const ColorItem = styled.div`
  margin: 0px 20px;
`

export const ColorCode = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  margin-top: 0px;
`

export const ColorInput = styled.input`
  height: 40px;
  border: 1px solid #334155;
  width: 100px;
  @media (min-width: 768px) {
    width: 150px;
  }
`

export const SubmitButton = styled.button`
  background-color: #00c9b7;
  border-style: none;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #334155;
`
