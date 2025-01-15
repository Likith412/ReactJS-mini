import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-container">
        <h1 className="movie-type-heading">Action Movies</h1>
        <MoviesSlider movieCategory="ACTION" moviesList={moviesList} />
        <h1 className="movie-type-heading">Comedy Movies</h1>
        <MoviesSlider movieCategory="COMEDY" moviesList={moviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
