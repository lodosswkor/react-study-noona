import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = (keyword, page) => {

    return !keyword ? api.get(`/movie/popular?language=ko-KR&page=${page}`) : api.get(`/search/movie?query=${keyword}&language=ko_KR&page=${page}`);
}

export const useSearchMovieQuery = ({keyword,page}) => {
    console.log(keyword);
    return useQuery({
        queryKey: ['search-movie', keyword, page ],
        queryFn: () => fetchSearchMovie(keyword,page),
        select: (result) => result.data,
    });
};