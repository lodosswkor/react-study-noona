import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"; 


const fetchDiscoverMovies = (keyword,page,sort_by,with_genres) => {
    let url = !keyword ? `/movie/popular?language=ko-KR&page=${page}` : `/search/movie?query=${keyword}&language=ko_KR&page=${page}`;
    if(with_genres) {
        url = `/discover/movie?language=ko-KR&page=${page}&sort_by=${sort_by}&with_genres=${with_genres}`;
    }     

    console.log('url',url);
    return api.get(url);
};

export const useDiscoverMoviesQuery = ({keyword,page,sort_by,with_genres}) => {
    return useQuery({
        queryKey: ['movie-discover',keyword,page,sort_by,with_genres],
        queryFn: () => fetchDiscoverMovies(keyword,page,sort_by,with_genres),
        staleTime: 1000 * 60 * 5,   
        select: (result) => result.data,
    });
};
