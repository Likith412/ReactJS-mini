import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(eachItem => (
            <PlanetItem planetDetails={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
