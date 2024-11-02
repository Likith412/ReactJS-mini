// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {className, headerText, description} = bannerDetails
  const bannerClassName = `banner ${className}`
  return (
    <li className={bannerClassName}>
      <div className="banner-text-container">
        <h1 className="banner-heading">{headerText}</h1>
        <p className="banner-description">{description}</p>
        <button className="banner-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
