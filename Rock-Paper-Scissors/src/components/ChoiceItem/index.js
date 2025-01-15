import {
  ChoicesListItem,
  ListItemBtn,
  ListItemBtnImage,
} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, onChoiceSelected} = props
  const {imageUrl, id, dataTestId} = choiceDetails

  const onClickChoice = () => {
    onChoiceSelected(id)
  }

  return (
    <ChoicesListItem>
      <ListItemBtn
        onClick={onClickChoice}
        type="button"
        data-testid={dataTestId}
      >
        <ListItemBtnImage src={imageUrl} alt={id} />
      </ListItemBtn>
    </ChoicesListItem>
  )
}

export default ChoiceItem
