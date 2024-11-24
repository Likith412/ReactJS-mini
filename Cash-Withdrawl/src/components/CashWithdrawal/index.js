// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawl extends Component {
  state = {
    balanceAmount: 2000,
  }

  onDenominationButtonClick = value => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - value,
    }))
  }

  render() {
    const {balanceAmount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <div className="card-profile">
            <div className="card-profile-logo-container">
              <p className="card-profile-logo">S</p>
            </div>
            <p className="card-profile-name">Sarah Williams</p>
          </div>
          <div className="card-balance">
            <p className="card-balance-text">Your Balance</p>
            <p className="card-balance-amount">{balanceAmount}</p>
          </div>
          <p className="card-balance-units">In Rupees</p>
          <div className="card-withdraw">
            <p className="card-withdraw-heading">Withdraw</p>
            <p className="card-withdraw-sub-heading">CHOOSE SUM (IN RUPEES)</p>
            <ul className="card-withdraw-denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationObj={eachDenomination}
                  onDenominationButtonClick={this.onDenominationButtonClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
