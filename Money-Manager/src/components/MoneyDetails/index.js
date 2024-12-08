// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses} = props
  const balance = totalIncome - totalExpenses
  return (
    <div className="money-details-container">
      <div className="money-details-item light-green-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-item-img"
        />
        <div className="money-details-item-right">
          <p className="money-details-item-right-heading">Your Balance</p>
          <p
            className="money-details-item-right-money"
            data-testid="balanceAmount"
          >
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="money-details-item light-blue-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-item-img"
        />
        <div className="money-details-item-right">
          <p className="money-details-item-right-heading">Your Income</p>
          <p
            className="money-details-item-right-money"
            data-testid="incomeAmount"
          >
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="money-details-item light-violet-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="money-details-item-img"
        />
        <div className="money-details-item-right">
          <p className="money-details-item-right-heading">Your Expenses</p>
          <p
            className="money-details-item-right-money"
            data-testid="expensesAmount"
          >
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
