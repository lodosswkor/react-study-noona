import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"; 


const fetchMovieVideo = (movieId) => {
    let url = `/movie/${movieId}/videos?language=ko-KR`;
    return api.get(url);
};

export const useMovieVideoQuery = ({movieId}) => {
    return useQuery({
        queryKey: ['movie-video',movieId],
        queryFn: () => fetchMovieVideo(movieId),
        staleTime: 1000 * 60 * 5,   
        select: (result) => result.data.results,
    });
};
