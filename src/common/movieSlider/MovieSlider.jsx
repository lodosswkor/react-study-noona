import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import "./MovieSlider.style.css"
import Carousel from 'react-multi-carousel';
import MovieCard from '../movieCard/MovieCard';
import { responsive } from '../../const/slide-responsive';

const MovieSlider = ({title, movies}) => {
  return (
    <div>
        <h3>{title}</h3>
        <Carousel
            infinite={true}
            centerMode={false}
            itemClass='movie-slider p-1'
            containerClass='carousel-container'
            responsive={responsive}
            >
            {movies?.map((item) => {
              return <MovieCard key={item.id} movie={item} />
            })}
        </Carousel>
    </div>
  )
}

export default MovieSlider