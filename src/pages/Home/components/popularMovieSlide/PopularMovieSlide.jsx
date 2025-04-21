import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import MovieSlider from '../../../../common/movieSlider/MovieSlider';

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

  return (
    <div>
        <MovieSlider title={'Popular Movies'} movies={data.results} />
    </div>
  )
}

export default PopularMovieSlide