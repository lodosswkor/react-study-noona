import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import MovieCard from '../movieCard/MovieCard';
import './PopularMovieSlide.style.css';

const PopularMovieSlide = () => {

  const {data, isLoading, isError, error} = usePopularMoviesQuery();

  if(isLoading) return <div><h1>Loading...</h1></div>;
  if(isError) {
    return (
      <div>
        <Alert variant={'danger'}>{error.message}</Alert>
      </div>
    );
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div>
        <h3>Popular Movies</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-slider p-1'
            containerClass='carousel-container'
            responsive={responsive}
            >
            {data?.results?.map((item) => {
              return <MovieCard key={item.id} movie={item} />
            })}
        </Carousel>
    </div>
  )
}

export default PopularMovieSlide