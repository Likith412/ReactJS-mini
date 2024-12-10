// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiObj, onEmojiSelect} = props
  const {id, emojiUrl, emojiName} = emojiObj

  const onClickEmoji = () => {
    onEmojiSelect(id)
  }
  return (
    <li className="emojis-list-item">
      <button
        className="emojis-list-item-btn"
        onClick={onClickEmoji}
        type="button"
      >
        <img src={emojiUrl} className="emoji-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
