import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios';


const ReactQueryPage = () => {

    const response = useQuery({
        queryKey: ['posts'],
        queryFn: () => axios.get('http://localhost:3000/posts'),
        retry: 1,
        select: (data) => data.data,
        gcTime: 1000 * 5,
    });

    const { data , isLoading, isError, error } = response;

    console.log(response);
    console.log(isLoading);
    console.log(isError);
    console.log(error);
    console.log(data);

    if(isLoading) return <div>Loading...</div> 
    if(isError) return <div>{error.message}</div> 

    return (
        <div>
            {data.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
}

export default ReactQueryPage