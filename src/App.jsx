import { Suspense } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/pages/home'
import Login from './components/pages/login'
import Register from './components/pages/register'
import DormsList from './components/pages/dorms'
import CarinderiasList from './components/pages/carinderias'
import LayoutRoute from './components/pages/layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoute />} />
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dorms" element={<DormsList />} />
          <Route path="carinderias" element={<CarinderiasList />} />
      </Routes>
    </BrowserRouter>
  )
}
