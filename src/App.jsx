import { Suspense } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import DormsList from './components/pages/dorms'
import CarinderiasList from './components/pages/Carinderias'
import LayoutRoute from './components/pages/layout'
import DormDetails from './components/pages/DormDetails'
import CarinderiaDetails from './components/pages/CarinderiaDetails'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route index element={<Home />}/>
          <Route path="dorms" element={<DormsList />} />
          <Route path="dorms/:id" element={<DormDetails />} />
          <Route path="carinderias" element={<CarinderiasList />} />
          <Route path="carinderias/:id" element={<CarinderiaDetails />} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
