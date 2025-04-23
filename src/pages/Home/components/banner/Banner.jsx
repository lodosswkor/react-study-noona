import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap'
import './Banner.style.css'


const bgImageUrl = import.meta.env.VITE_TMDB_BG_IMAGE_URL; 

const Banner = () => {

    const { data, isLoading, isError, error } = usePopularMoviesQuery(); 
    console.log(data); 
    
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
        <div style={{
                backgroundImage: `url("${bgImageUrl}${data?.results[0]?.poster_path}")`,
            }}
            className='banner'>
            <div className='banner-text-area'>
                <h1>{data?.results[0]?.title}</h1>
                <p>{data?.results[0]?.overview}</p>
            </div>
        </div>
    )
}

export default Banner