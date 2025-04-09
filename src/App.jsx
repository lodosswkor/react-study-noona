import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router'
import Main from './pages/Main'
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react';
import PrivateRoute from './route/privateRoute';


//1. 전체상품, 2. 로그인, 상품상세 
//1. 전체상품 : 전체상품 목록 
//2. 로그인을 누르면 로그인 페이지가 나온다. 
//3. 상품 디테일을 눌렀으니, 로그인이 안된 경우에는 로그인창으로 
//4. 로그인이 된 경우에만 상품 디테일을 볼수 있다.
//5. 로그아웃 버튼을 누르면 로그아웃이 된다.
//6. 다시 4번으로 ... 
//7. 상품을 검색할 수 있다. 
function App() {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    console.log(auth);
  }, [auth])

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Main/>} />
        <Route path="/login" element={<Login setAuth={setAuth}/>} />
        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=":id" element={<PrivateRoute auth={auth}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
