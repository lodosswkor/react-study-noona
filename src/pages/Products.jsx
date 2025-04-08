import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../components/product/ProductCard';

//-- 정리합시다 정리 합시다. ^^
const Products = () => {

  const [productList, setProductList] = useState(); 
  
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/lodosswkor/react-study-noona/products`; 
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log(data);
}

  useEffect(() => {
      getProducts();
  }, []);

  return (
    <div>
        <ProductCard productList={productList} />
    </div>
  )
}

export default Products