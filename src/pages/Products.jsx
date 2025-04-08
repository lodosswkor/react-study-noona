import React from 'react'
import { useEffect } from 'react'

const Products = () => {

    const getProducts = async () => {
        let url = `http://localhost:3000/products`; 
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>Products</div>
  )
}

export default Products