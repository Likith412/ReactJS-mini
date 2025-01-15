import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  PopupContainer,
  RulesButton,
  RulesImg,
  CloseButtonAndRulesContainer,
  CloseButton,
} from './styledComponents'

const RulesView = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
      {close => (
        <CloseButtonAndRulesContainer>
          <CloseButton type="button" onClick={close}>
            <RiCloseLine />
          </CloseButton>
          <RulesImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </CloseButtonAndRulesContainer>
      )}
    </Popup>
  </PopupContainer>
)

export default RulesView
