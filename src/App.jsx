import { Suspense } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/pages/home"
import Login from './components/pages/login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
