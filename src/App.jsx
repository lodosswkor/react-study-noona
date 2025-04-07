import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/Homepage';
import { Routes, Route } from "react-router";
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="products" element={<ProductPage/>}>
          <Route path=":id" element={<ProductDetailPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
