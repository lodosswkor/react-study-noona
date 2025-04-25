import React from 'react'
import './MovieDetailPage.style.css'
import { useNavigate } from 'react-router-dom'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const MovieDetailPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [expandedReview, setExpandedReview] = useState({});


  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

  const formatNumber = (number) => { 
    return number.toLocaleString('ko-KR');
  }

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}시간 ${mins}분`;
  }

  const toggleReview = (reviewId) => {
    setExpandedReview((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));

    console.log(expandedReview);
  };

  const handleClose = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const reviews = [
    {
      id: 1,
      author: "MovieLover",
      rating: 4.5,
      content: "놀라운 영화입니다. 마피아 영화의 대명사로 불리는 대부 시리즈는 언제 봐도 감탄이 나옵니다. 특히 알 파치노의 연기는 정말 인상적이었고, 스토리 전개도 매끄럽습니다. 마이클 콜레오네의 캐릭터 변화가 특히 인상적이었습니다. 첫 번째 영화에서 보여준 순수함에서 벗어나 냉혹한 마피아 보스로 변모해가는 과정이 너무나도 자연스럽게 그려졌습니다.",
      created_at: "2024-03-15"
    },
    {
      id: 2,
      author: "CinemaFan",
      rating: 5,
      content: "대부 1편에 이어 2편도 최고의 걸작입니다. 특히 로버트 드니로가 연기한 젊은 비토 콜레오네의 이야기는 정말 인상적이었습니다. 두 개의 시간선을 오가며 진행되는 스토리텔링도 매우 훌륭했습니다.dasdasdasdasdasasdasdasdasdasd asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdadasdsadadasdadasdadasd\ndasdasdsadass\\mdasdasdsasasdasdasdadd<br>",
      created_at: "2024-03-14"
    },
    {
      id: 3,
      author: "살려줘 디자인하다가 죽겠어ㅠㅠ",
      rating: 5,
      content: "대부 1편에 이어 2편도 최고의 걸작입니다. 특히 로버트 드니로가 연기한 젊은 비토 콜레오네의 이야기는 정말 인상적이었습니다. 두 개의 시간선을 오가며 진행되는 스토리텔링도 매우 훌륭했습니다.dasdasdasdasdasasdasdasdasdasd asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdasdasdasdadd<br>asdasdasdadasdsadadasdadasdadasd\ndasdasdsadass\\mdasdasdsasasdasdasdadd<br>",
      created_at: "2024-03-14"
    }
  ];


  return (
    <div className="movie-detail-container">
      <div 
        className="background-image"
        style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path})` }}
      />
      <button className="close-button" onClick={handleClose}>
        <span className="close-icon">×</span>
      </button>
      <div className="content-wrapper">
        <div className="movie-info-section">
          <div className="movie-badge">
            {data?.genres.map((genre) => (
              <span key={genre.id} className="badge drama">
                {genre.name}
              </span>
            ))}
          </div>
          <h1 className="video-title">{data?.title}</h1>
          <div className="release-info">
            <span className="dot">•</span>
            <span className="release-date">개봉일: {data?.release_date}</span>
            <span className="dot">•</span>
            <span className="runtime">상영시간: {data?.runtime ? formatTime(data?.runtime) : ""}</span>
            <span className="dot">•</span>
            <span className="rating">★ {data?.vote_average?.toFixed(1)}</span>
            <span className="dot">•</span>
            <span className="budget">예산: ${data?.budget ? formatNumber(data?.budget) : "0"}</span>
            <span className="dot">•</span>
            <span className="revenue">수익: ${data?.revenue ? formatNumber(data?.revenue) : "0"}</span>
          </div>
        </div>

        <div className="content-section">
          {data?.overview && (
            <div className="movie-content">
              <div className="info-section">
                  <div className="synopsis">
                    <h3>시놉시스</h3>
                    <p className="description">{data?.overview}</p>
                  </div>
              </div>
            </div>
          )}

         <div className="reviews-section">
            <h3>리뷰</h3>
            <div className="reviews-container">
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-author">
                      <span className="author-name">{review.author}</span>
                      <span className="review-date">{review.created_at}</span>
                    </div>
                    <div className="review-rating">★ {review.rating}</div>
                  </div>
                  <div className={`review-content ${expandedReview[review.id] ? 'expanded' : ''}`}>
                    <p>{review.content}</p>
                  </div>
                    <button 
                      className="show-more-button"
                      onClick={() => toggleReview(review.id)}
                    >
                      {expandedReview[review.id] ? '접기' : '더보기'}
                    </button>
                </div>
              ))}
            </div>
          </div>  
        </div>

          

      </div>
    </div>
  )
}

export default MovieDetailPage