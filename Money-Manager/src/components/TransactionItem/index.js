// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionObj, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionObj

  const onButtonClick = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transactions-list-item">
      <p className="transactions-list-item-text width-33">{title}</p>
      <p className="transactions-list-item-text width-33">Rs {amount}</p>
      <div className="flex-container">
        <p className="transactions-list-item-text">
          {type === 'INCOME' ? 'Income' : 'Expenses'}
        </p>
        <button
          className="delete-btn"
          type="button"
          onClick={onButtonClick}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
