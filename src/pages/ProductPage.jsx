import React from 'react'
import { useSearchParams } from 'react-router'

const ProductPage = () => {

  const [query, setQuery] = useSearchParams(); 
  console.log(query.get('q')); 

  return (
   <>
    <h1>show Product</h1>
    <div>ProductPage</div>
   </> 
  )
}

export default ProductPage