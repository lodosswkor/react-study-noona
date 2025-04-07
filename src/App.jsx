import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router";
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import UserPage from './pages/UserPage';
import { Navigate } from 'react-router';


function App() {

  const [auth, setAuth] = useState(true); 
  const PrivateRoute = () => {
    return auth ? <UserPage/> : <Navigate to="/login"/>; 
  };

  return (
    <>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products">
          <Route index element={<ProductPage/>} />
          <Route path=":id" element={<ProductDetailPage/>} />
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </>
  )
}

export default App
