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
      <div className="flex-container">
        <div className="transactions-list-item-left">
          <p className="transactions-list-item-text">{title}</p>
          <p className="transactions-list-item-text">Rs {amount}</p>
          <p className="transactions-list-item-text">
            {type === 'INCOME' ? 'Income' : 'Expenses'}
          </p>
        </div>
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
