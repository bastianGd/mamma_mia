import './App.css';
import RegForm from './views/RegForm';
import Navbar from './components/Navbars/Navbar';
import Footer from './components/Footer/FooterPizza';
import Home from './views/Home';
import Pizza from './utils/APIs/Pizza';
import InputLogin from "./views/InputLogin";
import Cart from "./views/Cart/Cart";
import Profile from './views/Profile/Profile';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './views/NotFound/NotFound';
import CartContextProvider from './context/CartContext';
import PizzaDetails from './utils/APIs/Pizza';
import { useUserContext } from './context/UserContext';


function App() {
  const { token } = useUserContext();
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div id="root">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<InputLogin />} />
              <Route path="/register" element={<RegForm />} />
              <Route path="/pizza/:id" element={<PizzaDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
