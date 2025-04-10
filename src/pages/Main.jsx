import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ProductAll from '../components/product/ProductAll';

const Main = () => {

  const [productList, setProductList] = useState(); 

  const getProducts = async () => {
    let url = `${import.meta.env.VITE_API_URL}/products`; 
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
        <ProductAll productList={productList} />
    </div>
  )
}

export default Main