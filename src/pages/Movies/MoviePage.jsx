import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router';
import { Container, Alert, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/movieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useDiscoverMoviesQuery } from '../../hooks/useDiscoverMovies';
import { useNavigate } from 'react-router';


// 경로2가지 
// 1. 메뉴에서 클릭 => Popluar Movie 보여주기 
// 2. keyword 검색 
// 페이지네이션 설치 
// page state 만들기 
// page값이 바뀔때 마다 useSearchMovieQuery 호출

const MoviePage = () => {

  const [ query ] = useSearchParams();
  const keyword = query.get('q');
  const [ page, setPage ] = useState(1);
  const { data: genreData } = useMovieGenreQuery();
  const [ selectedGenres, setSelectedGenres ] = useState([]);
  const [ searchKeyword, setSearchKeyword ] = useState(keyword);
  const isFirstRender = useRef(true);
  const navigate = useNavigate();


  
  const { data, isLoading, isError, error } = useDiscoverMoviesQuery({
    keyword: keyword || '',
    page: page,
    sort_by: 'popularity.desc',
    with_genres: selectedGenres.join('|')
  });
  
  //const { data, isLoading, isError, error} = useDiscoverMoviesQuery({keyword, page, 'popularity.desc', '12|16|18|28|53'});

  const handlePageChange = () => {
    setPage(prev => prev+1);
  }

  const handleGenreClick = (genreId) => {
    setSelectedGenres(prev => 
      prev.includes(genreId) 
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    );
    setPage(1); // 장르 선택 시 페이지 초기화
  };

  //-- 페이지 초기화 


  useEffect(() => {
    if(selectedGenres.length > 0) {
      isFirstRender.current = true;
      setSelectedGenres([]);
    }
    setSearchKeyword(keyword);
    setPage(1);
  }, [keyword]);

  useEffect(() => { 

    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if(selectedGenres.length === 0) {
      navigate('/movies');
      return;
    }

    query
    setSearchKeyword('');
    setPage(1);    

  }, [selectedGenres]);


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
    <div className="netflix-container">
      <Container fluid>
        {searchKeyword && (
          <div className="netflix-search-result">
            <h2>"{searchKeyword}" 검색 결과</h2>
          </div>
        )}
        
        <Row className="netflix-content">
          <Col lg={3} md={4} sm={12} className="netflix-filter">
            <div className="netflix-filter-panel">
              <h3>장르 필터</h3>
              <div className="netflix-divider"></div>
              <div className="genre-tags">
                {genreData?.genres?.map((genre) => (
                  <Button
                    key={genre.id}
                    variant={selectedGenres.includes(genre.id) ? "primary" : "outline-primary"}
                    className="genre-tag"
                    onClick={() => handleGenreClick(genre.id)}
                  >
                    {genre.name}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
          
          <Col lg={9} md={8} sm={12}>
            {data?.results.length === 0 ? (
              <div className="netflix-no-result">
                <h3>검색 결과를 찾을 수 없습니다.</h3>
                <p>다른 검색어를 입력하거나 필터를 조정해보세요.</p>
              </div>
            ) : (
              <div className="netflix-movie-grid">
                {data?.results.map((item, idx) => (
                  <div key={idx} className="netflix-movie-item">
                    <MovieCard movie={item} />
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
        
        {data?.results.length > 0 && (
          <div className="paginate-wrapper">
            <ReactPaginate
              previousLabel="◀"
              nextLabel="▶"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item previous"
              previousLinkClassName="page-link"
              nextClassName="page-item next"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item break"
              breakLinkClassName="page-link"
              pageCount={data?.total_pages > 500 ? 500 : data?.total_pages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={window.innerWidth > 768 ? 3 : 1}
              onPageChange={handlePageChange}
              containerClassName="pagination"
              activeClassName="active"
              forcePage={page-1}
              disabledClassName="disabled"
              ariaLabelBuilder={(page, selected) => 
                selected ? `현재 페이지, 페이지 ${page}` : `페이지 ${page}로 이동`
              }
              aria-label={data?.total_pages <= 1 ? "Pagination with only one page" : "Pagination"}
            />
          </div>
        )}
      </Container>
    </div>
  )
}

export default MoviePage