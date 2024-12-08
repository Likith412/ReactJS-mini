import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: 'INCOME',
    transactionsList: [],
    totalIncome: 0,
    totalExpenses: 0,
  }

  onTitleInputChange = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onAmountInputChange = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onTypeInputChange = event => {
    this.setState({
      typeInput: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, typeInput} = this.state
    if (titleInput !== '' && !Number.isNaN(parseInt(amountInput))) {
      const newTransaction = {
        id: uuidv4(),
        title: titleInput,
        amount: parseInt(amountInput),
        type: typeInput,
      }

      let {totalIncome, totalExpenses} = this.state
      if (typeInput === 'INCOME') {
        totalIncome += parseInt(amountInput)
      } else {
        totalExpenses += parseInt(amountInput)
      }

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        titleInput: '',
        amountInput: '',
        typeInput: 'INCOME',
        totalIncome,
        totalExpenses,
      }))
    }
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    let {totalIncome, totalExpenses} = this.state

    const transaction = transactionsList.find(
      eachTransaction => eachTransaction.id === id,
    )

    if (transaction.type === 'INCOME') {
      totalIncome -= transaction.amount
    } else {
      totalExpenses -= transaction.amount
    }

    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
      totalIncome,
      totalExpenses,
    }))
  }

  render() {
    const {titleInput, amountInput, typeInput, transactionsList} = this.state
    const {totalIncome, totalExpenses} = this.state
    console.log(transactionsList)
    return (
      <div className="bg-container">
        <div className="container">
          <div className="container-top">
            <div className="greeting-card">
              <h1 className="greeting-card-heading">Hi, Richard</h1>
              <p className="greeting-card-description">
                Welcome back to your <span className="bold">Money Manager</span>
              </p>
            </div>
            <MoneyDetails
              totalIncome={totalIncome}
              totalExpenses={totalExpenses}
            />
          </div>
          <div className="container-bottom">
            <div className="add-transaction-card">
              <h1 className="card-heading">Add Transaction</h1>
              <form onSubmit={this.onAddTransaction}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input"
                  placeholder="TITLE"
                  value={titleInput}
                  onChange={this.onTitleInputChange}
                />
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="input"
                  placeholder="AMOUNT"
                  value={amountInput}
                  onChange={this.onAmountInputChange}
                />
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select
                  className="input"
                  id="type"
                  value={typeInput}
                  onChange={this.onTypeInputChange}
                >
                  {transactionTypeOptions.map(eachTransactionType => (
                    <option
                      value={eachTransactionType.optionId}
                      key={eachTransactionType.optionId}
                      className="transaction-type-input-option"
                    >
                      {eachTransactionType.displayText}
                    </option>
                  ))}
                </select>
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-history-card">
              <h1 className="card-heading">History</h1>
              <div className="header">
                <p className="header-text">Title</p>
                <p className="header-text">Amount</p>
                <p className="header-text">Type</p>
              </div>
              <ul className="transactions-list">
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    transactionObj={eachTransaction}
                    key={eachTransaction.id}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
