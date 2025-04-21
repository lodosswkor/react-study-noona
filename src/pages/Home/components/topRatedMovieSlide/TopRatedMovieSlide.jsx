import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import MovieSlider from '../../../../common/movieSlider/MovieSlider';

const PopularMovieSlide = () => {

  const {data, isLoading, isError, error} = useTopRatedMoviesQuery();

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
      <MovieSlider title={'Top Rated Movies'} movies={data.results} />
    </div>
  )
}

export default PopularMovieSlide