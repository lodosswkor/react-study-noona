import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <>
        <div>Homepage</div>
        <Link to="/about" >About</Link>
    </>
  )
}

export default HomePage