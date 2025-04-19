import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap'
import './Banner.style.css'


const bgImageUrl = import.meta.env.VITE_TMDB_BG_IMAGE_URL; 

const Banner = () => {

    const { data, isLoading, isError, error } = usePopularMoviesQuery(); 
    console.log(data); 
    
    if(isLoading) return <div><h1>Loading...</h1></div>;
    if(isError) {
        return (
            <div>
                <Alert variant={'danger'}>
                 {error.message}
                </Alert>
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