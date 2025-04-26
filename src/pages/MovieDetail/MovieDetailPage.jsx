import React from 'react'
import './MovieDetailPage.style.css'
import { useNavigate } from 'react-router-dom'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMovieVideoQuery } from '../../hooks/useMovieVideo';
import { useMovieReviewQuery } from '../../hooks/useMovieReview';

const MovieDetailPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [expandedReview, setExpandedReview] = useState({});
  const [currentPage, setCurrentPage] = useState(1);


  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  const { data: videoData } = useMovieVideoQuery({movieId: id});
  const { data: reviewData, isLoading: isReviewsLoading } = useMovieReviewQuery(id, currentPage);
  
  // console.log(reviewData);
  // console.log(videoData);
  // console.log(data);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: document.querySelector('.reviews-section').offsetTop,
      behavior: 'smooth'
    });
  };


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

          <div className="youtube-section">
            <h3>예고편</h3>
            <div className="youtube-container">
              {videoData?.length > 0 && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoData[0].key}`}
                title={videoData[0].name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              )}
              <div className="youtube-placeholder">
                <p>동영상이 존재하지 않습니다.</p>
              </div>
            </div>
          </div>

         <div className="reviews-section">
            <h3>리뷰</h3>
            <div className="reviews-container">
              {isReviewsLoading ? (
                <div className="review-card">
                  <p>리뷰를 불러오는 중입니다...</p>
                </div>
              ) : reviewData?.results?.length > 0 ? (
                reviewData.results.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="review-author">
                        <span className="author-name">{review.author}</span>
                        <span className="review-date">
                          {new Date(review.created_at).toLocaleDateString('ko-KR')}
                        </span>
                      </div>
                      <div className="review-rating">
                        {review.author_details.rating ? `★ ${review.author_details.rating.toFixed(1)}` : '평점 없음'}
                      </div>
                    </div>
                    <div className={`review-content ${expandedReview[review.id] ? 'expanded' : ''}`}>
                      <p>{review.content}</p>
                    </div>
                    {review.content.length > 200 && (
                      <button 
                        className="show-more-button"
                        onClick={() => toggleReview(review.id)}
                      >
                        {expandedReview[review.id] ? '접기' : '더보기'}
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className="review-card">
                  <p>아직 작성된 리뷰가 없습니다.</p>
                </div>
              )}
            </div>

            {reviewData?.total_pages > 1 && (
              <div className="pagination">
                <button
                  className="pagination-button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  이전
                </button>
                {Array.from({ length: Math.min(5, reviewData.total_pages) }, (_, i) => {
                  let pageNumber;
                  if (reviewData.total_pages <= 5) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1;
                  } else if (currentPage >= reviewData.total_pages - 2) {
                    pageNumber = reviewData.total_pages - 4 + i;
                  } else {
                    pageNumber = currentPage - 2 + i;
                  }
                  return (
                    <button
                      key={pageNumber}
                      className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                <button
                  className="pagination-button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === reviewData.total_pages}
                >
                  다음
                </button>
              </div>
            )}
          </div>  
        </div>

          

      </div>
    </div>
  )
}

export default MovieDetailPage