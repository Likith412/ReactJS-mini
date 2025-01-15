import Slider from 'react-slick'

import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList, movieCategory} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(eachItem => {
        if (eachItem.categoryId === movieCategory) {
          return <MovieItem movieDetails={eachItem} key={eachItem.id} />
        }
        return null
      })}
    </Slider>
  )
}

export default MoviesSlider
