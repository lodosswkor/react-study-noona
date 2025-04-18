import { Routes, Route, Link } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import HomePage from './pages/Home/HomePage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFound from './pages/Error/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// 홈페이지
// 영화목록
// 영화상세 

function App() {

  return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies"> {/* nested route */}
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
