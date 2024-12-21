// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {
    currenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchCryptocurrenciesList()
  }

  fetchCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({
      currenciesList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {currenciesList} = this.state
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="image"
              alt="cryptocurrency"
            />
            <div className="crypto-currencies-container">
              <div className="crypto-currencies-header">
                <h1 className="header-text coin-type">Coin Type</h1>
                <h1 className="header-text usd-and-euro">USD</h1>
                <h1 className="header-text usd-and-euro">EURO</h1>
              </div>
              <ul className="crypto-currencies-list-container">
                {currenciesList.map(eachItem => (
                  <CryptocurrencyItem
                    currencyObj={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
