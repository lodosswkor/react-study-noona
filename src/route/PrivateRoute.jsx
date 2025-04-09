import React from 'react'
import ProductDetail from '../pages/ProductDetail'
import { Navigate } from 'react-router'

const PrivateRoute = ({auth}) => {

  return (
    auth ? <ProductDetail /> : <Navigate to="/login"/>
  )
}

export default PrivateRoute