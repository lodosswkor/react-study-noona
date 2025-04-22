import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/movieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css';


// 경로2가지 
// 1. 메뉴에서 클릭 => Popluar Movie 보여주기 
// 2. keyword 검색 
// 페이지네이션 설치 
// page state 만들기 
// page값이 바뀔때 마다 useSearchMovieQuery 호출

const MoviePage = () => {

  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');
  const [page, setPage] = useState(1); 
  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});

  const handlePageChange = ({selected:page}) => {
    setPage(page+1);
  }

  //-- 페이지 초기화 
  useEffect(() => {
    setPage(1); 
  }, [keyword]);

  if(isLoading) return <div><h1>Loading...</h1></div>;
  if(isError) {
    return (
      <div>
        <Alert variant={'danger'}>{error.message}</Alert>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((item, idx) => 
              <Col key={idx}><MovieCard movie={item}/></Col>
            )}
          </Row>
        </Col>
      </Row>
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
          pageCount={data?.total_pages > 500 ? 500 : data?.total_pages ?? 1}
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
    </Container>
  )
}

export default MoviePage