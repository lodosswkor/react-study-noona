import React from 'react'
import { useUpCommingMoviesQuery } from '../../../../hooks/useUpCommingMovies';
import MovieSlider from '../../../../common/movieSlider/MovieSlider';

const UpCommingMovieSlide = () => {

  const {data, isLoading, isError, error} = useUpCommingMoviesQuery();

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
      <MovieSlider title={'Upcoming Movies'} movies={data.results} />
    </div>
  )
}

export default UpCommingMovieSlide