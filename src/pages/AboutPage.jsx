import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'; // 함수 안에서 사용.

const AboutPage = () => {

  const navigate = useNavigate(); 
  const goToHomepage = () => {
    navigate("/");
  };

  return (
    <>
        <div>AboutPage</div>
        <Link to="/">Home</Link><br/>
        <button onClick={goToHomepage}>goto Homepage</button>
    </>
  )
}

export default AboutPage