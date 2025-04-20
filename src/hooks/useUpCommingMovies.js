import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"; 


const fetchUpCommingMovies = () => {
    return api.get('/movie/upcoming');
};

export const useUpCommingMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-upcomming'],
        queryFn: fetchUpCommingMovies,
        staleTime: 1000 * 60 * 5,   
        select: (result) => result.data,
    });
};
