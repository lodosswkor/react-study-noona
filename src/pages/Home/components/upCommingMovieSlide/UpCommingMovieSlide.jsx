import React from 'react'
import { useUpCommingMoviesQuery } from '../../../../hooks/useUpCommingMovies';
import MovieSlider from '../../../../common/movieSlider/MovieSlider';

const UpCommingMovieSlide = () => {

  const {data, isLoading, isError, error} = useUpCommingMoviesQuery();

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
      <MovieSlider title={'Upcoming Movies'} movies={data.results} />
    </div>
  )
}

export default UpCommingMovieSlide