import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div>
      <div className="planet-item">
        <img
          src={imageUrl}
          alt={`planet ${name}`}
          className="planet-item-img"
        />
        <h1 className="planet-item-name">{name}</h1>
        <p className="planet-item-description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
