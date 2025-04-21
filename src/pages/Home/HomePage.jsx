import React from 'react'
import Banner from './components/banner/Banner'
import PopularMovieSlide from './components/popularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/topRatedMovieSlide/TopRatedMovieSlide'
import UpCommingMovieSlide from './components/upCommingMovieSlide/UpCommingMovieSlide'
//-- 2. Popular 영화
//-- 3. Top rated 영화
//-- 4. Upcoming 영화
//-- 5. Now playing 영화


const HomePage = () => {
  return (
    <div>
      <Banner/>
      <div className='container'>
        <PopularMovieSlide/>
        <TopRatedMovieSlide/>
        <UpCommingMovieSlide/>
      </div>
    </div>
  )
}

export default HomePage;