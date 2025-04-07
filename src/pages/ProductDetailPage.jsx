import React from 'react'
import { useParams, useSearchParams } from 'react-router'

const ProductDetailPage = () => {

  // const params = useParams(); 
  // console.log(params);
  const { id } = useParams(); 


  const [ searchParams, setSearchParams ] = useSearchParams(); 
  console.log(searchParams.get('name'));
  searchParams.set('name', '바뀌냐?'); //-- URL변경없이 바뀜 
  console.log(searchParams.get('name'));
  const queryList = [...searchParams]; //-- 연구좀 합시다. 
  console.log(searchParams);
  console.log(queryList); 

  return (
    <>
        <div>ProductDetailPage {id}</div>
        <button onClick={() => {setSearchParams({ name : '뽀로리', limit : 10})}}>눌러바</button>
    </>
  )
}

export default ProductDetailPage