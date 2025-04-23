import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import MovieSlider from '../../../../common/movieSlider/MovieSlider';

const PopularMovieSlide = () => {

  const {data, isLoading, isError, error} = usePopularMoviesQuery();

  if(isLoading) return (
    <div className="netflix-loading">
      <div className="netflix-spinner"></div>
      <h2>로딩 중...</h2>
    </div>
  );

  if(isError) {
    return (
      <div className="netflix-error">
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