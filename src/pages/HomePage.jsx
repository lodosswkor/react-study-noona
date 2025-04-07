import React from 'react'
import { Link, useNavigate } from 'react-router'



const HomePage = () => {

  const navigate = useNavigate(); 

  const goProductPage = () => {
    navigate('/products?q=pants');  
  };

  return (
    <>
        <div>Homepage</div>
        <Link to="/about" >About</Link>
        <button onClick={goProductPage}>상품보러 가볼까?</button>
    </>
  )
}

export default HomePage