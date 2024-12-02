import './App.css'
import RegForm from './views/RegForm'
import Navbar from './components/Navbars/Navbar'
import Footer from './components/Footer/FooterPizza'
import Home from './views/Home'
import Pizza from './utils/APIs/Pizza'
import InputLogin from "./views/InputLogin"
import Cart from "./views/Cart/Cart"
import Profile from './views/Profile/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './views/NotFound/NotFound'


function App() {

  return (
    <>
      <BrowserRouter>
        <div id="root">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<InputLogin />} />
              <Route path="/register" element={<RegForm />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
