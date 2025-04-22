import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'

const MovieCard = ({movie}) => {


  const {data: genreData} = useMovieGenreQuery();
  
  const showGenre = (id) => {
    if(!genreData) return '';
    return genreData.genres.find((item) => item.id == id).name;
  }

  return (
    <div
        className={'movie-card'}
        style={{
            backgroundImage: `url(${import.meta.env.VITE_TMDB_MOVIE_CARD_IMAGE_URL}${movie?.poster_path})`,
        }}
    >
        <div className={'overlay'}>
            <div className="movie-info">
                <div className="movie-title">{movie?.title}</div>
                <div className="movie-details">
                    <div className="rating">
                        <span className="rating-label">평점</span>
                        <span className="rating-value">{movie?.vote_average?.toFixed(1)}</span>
                    </div>
                    <div className="age-rating">
                        {movie?.adult ? '청불' : '19세 관람가'}
                    </div>
                </div>
                <div className="genre-container">
                    {movie?.genre_ids?.map((item)=>
                        <Badge key={item.id} bg={'danger'} className="genre-badge">{showGenre(item)}</Badge>
                    )}
                </div>
            </div>
        </div>  
    </div>
  )
}

export default MovieCard