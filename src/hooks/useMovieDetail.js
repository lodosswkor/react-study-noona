import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (movieId) => {
    return api.get(`/movie/${movieId}?language=ko-KR`);
}

export const useMovieDetailQuery = (movieId) => {
    return useQuery({
        queryKey: ['movie-detail', movieId],
        queryFn: () => fetchMovieDetail(movieId),
        staleTime: 1000 * 60 * 5,
        select: (result) => result.data,
    })
}