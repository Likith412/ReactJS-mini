import {DirectionsListItem, TabButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeGradientDirection, isSelected} = props
  const {directionId, displayText} = directionDetails
  const onClickGradientDirectionItem = () => {
    changeGradientDirection(directionId)
  }

  return (
    <DirectionsListItem>
      <TabButton
        type="button"
        onClick={onClickGradientDirectionItem}
        isSelected={isSelected}
      >
        {displayText}
      </TabButton>
    </DirectionsListItem>
  )
}

export default GradientDirectionItem
