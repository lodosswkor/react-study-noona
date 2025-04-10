import React from 'react'
import { useState,useEffect } from 'react';
import ProductAll from '../components/product/ProductAll';
import { useSearchParams } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import nothing from '../assets/nothing.png';

const Products = () => {


  const [productList, setProductList] = useState([]); 
  const [query, setQuery] = useSearchParams(); 


  const getProducts = async () => {

    let searchText = query.get('q') ? query.get('q').trim() : '';
    let url = `${import.meta.env.VITE_API_URL}/products?q=${searchText}`; 
    let response = await fetch(url);
    let data = await response.json();

    // let searchText = query.get('q') ? query.get('q').trim() : null;
    // if(searchText) {
    //   data = data.filter((item) => item.title.indexOf(searchText) >= 0); 
    // }

    setProductList(data)
}

  useEffect(() => {
      getProducts();
  }, [query]);

  return (
    <div>
        {productList.length ? <ProductAll productList={productList} /> : <Container><Row md={12}><img src={nothing} width={300}/></Row></Container>}
    </div>
  )
}

export default Products