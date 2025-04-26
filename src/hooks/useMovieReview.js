import { useQuery } from '@tanstack/react-query';
import api from "../utils/api";

const getMovieReview = (movieId, page) => {
    return api.get(`/movie/${movieId}/reviews?page=${page}`);
};

export const useMovieReviewQuery = (movieId, page = 1) => {
  return useQuery({
    queryKey: ['movieReview', movieId, page],
    queryFn: () => getMovieReview(movieId, page),
    select: (data) => ({
      results: data.data.results,
      total_pages: data.data.total_pages,
      page: data.data.page
    }),
  });
}; 