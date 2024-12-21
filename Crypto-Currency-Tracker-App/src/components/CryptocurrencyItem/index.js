// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyObj} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyObj
  return (
    <li className="crypto-currencies-list-item">
      <div className="coin-type flex-container">
        <img src={currencyLogo} alt={currencyName} className="list-item-logo" />
        <p className="list-item-text">{currencyName}</p>
      </div>
      <p className="list-item-text usd-and-euro">{usdValue}</p>
      <p className="list-item-text usd-and-euro">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
