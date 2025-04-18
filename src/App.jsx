import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReactQueryPage from './pages/ReactQueryPage' 

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/react-query">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </>
  )
}

export default App
