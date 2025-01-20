import './index.css'

const FailureView = props => {
  const {onClickRetry} = props
  return (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
      <p className="failure-view-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" onClick={onClickRetry} className="failure-view-btn">
        Retry
      </button>
    </div>
  )
}

export default FailureView
