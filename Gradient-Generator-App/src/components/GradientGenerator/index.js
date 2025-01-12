import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  BgContainer,
  Container,
  Heading,
  SubHeading,
  GradientDirectionsListContainer,
  Form,
  ColorsContainer,
  ColorItem,
  ColorCode,
  ColorInput,
  SubmitButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    selectedFirstColor: '#8ae323',
    selectedSecondColor: '#014f7b',
    selectedGradientDirectionId: gradientDirectionsList[0].directionId,
    gradient: {
      firstColor: '#8ae323',
      secondColor: '#014f7b',
      direction: gradientDirectionsList[0].value,
    },
  }

  onChangeSelectedFirstColor = event => {
    this.setState({
      selectedFirstColor: event.target.value,
    })
  }

  onChangeSelectedSecondColor = event => {
    this.setState({
      selectedSecondColor: event.target.value,
    })
  }

  changeGradientDirection = id => {
    this.setState({
      selectedGradientDirectionId: id,
    })
  }

  generateGradient = event => {
    event.preventDefault()
    const {
      selectedFirstColor,
      selectedSecondColor,
      selectedGradientDirectionId,
    } = this.state

    const directionObj = gradientDirectionsList.find(
      eachItem => eachItem.directionId === selectedGradientDirectionId,
    )
    const directionValue = directionObj.value

    this.setState({
      gradient: {
        firstColor: selectedFirstColor,
        secondColor: selectedSecondColor,
        direction: directionValue,
      },
    })
  }

  render() {
    const {
      selectedFirstColor,
      selectedSecondColor,
      selectedGradientDirectionId,
      gradient,
    } = this.state

    return (
      <BgContainer
        firstColor={gradient.firstColor}
        secondColor={gradient.secondColor}
        direction={gradient.direction}
        data-testid="gradientGenerator"
      >
        <Container>
          <Heading>Generate a CSS Color Gradient</Heading>
          <SubHeading>Choose Direction</SubHeading>
          <GradientDirectionsListContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                directionDetails={eachItem}
                isSelected={
                  eachItem.directionId === selectedGradientDirectionId
                }
                changeGradientDirection={this.changeGradientDirection}
              />
            ))}
          </GradientDirectionsListContainer>
          <SubHeading>Pick the Colors</SubHeading>
          <Form onSubmit={this.generateGradient}>
            <ColorsContainer>
              <ColorItem>
                <ColorCode>{selectedFirstColor}</ColorCode>
                <ColorInput
                  type="color"
                  value={selectedFirstColor}
                  onChange={this.onChangeSelectedFirstColor}
                />
              </ColorItem>
              <ColorItem>
                <ColorCode>{selectedSecondColor}</ColorCode>
                <ColorInput
                  type="color"
                  value={selectedSecondColor}
                  onChange={this.onChangeSelectedSecondColor}
                />
              </ColorItem>
            </ColorsContainer>
            <SubmitButton type="submit">Generate</SubmitButton>
          </Form>
        </Container>
      </BgContainer>
    )
  }
}

export default GradientGenerator
