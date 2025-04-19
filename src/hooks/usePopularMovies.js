import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"; 


const fetchPopularMovies = () => {
    return api.get('/movie/popular');
};

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        staleTime: 1000 * 60 * 5,   
        select: (result) => result.data,
    });
};
