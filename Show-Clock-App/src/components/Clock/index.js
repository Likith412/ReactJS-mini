import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateTime: new Date(),
    }
  }

  componentDidMount() {
    this.clockId = setInterval(() => {
      this.setState({dateTime: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.clockId)
  }

  render() {
    const {dateTime} = this.state
    const clockTime = dateTime.toLocaleTimeString()
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <h1 className="heading">{clockTime}</h1>
      </div>
    )
  }
}
export default Clock
