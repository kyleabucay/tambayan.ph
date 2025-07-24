import { Suspense } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import DormsList from './components/pages/dorms'
import CarinderiasList from './components/pages/carinderias'
import LayoutRoute from './components/pages/Layout'
import DormDetails from './components/pages/DormDetails'
import ScrollToTop from './components/ui/ScrollToTop'

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
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
