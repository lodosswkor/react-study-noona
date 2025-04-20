import React from 'react'
import Banner from './components/banner/Banner'
import PopularMovieSlide from './components/popularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/topRatedMovieSlide/TopRatedMovieSlide'
import UpCommingMovieSlide from './components/upCommingMovieSlide/UpCommingMovieSlide'

//-- 1. 배너 => top popular 영화의 첫번째 영화를 보여줌
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