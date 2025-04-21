import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenre = () => {
    return api.get('/genre/movie/list?language=ko-KR');
}

export const useMovieGenreQuery= () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        staleTime: 1000 * 60 * 5,
        select: (result) => result.data,
    })
}